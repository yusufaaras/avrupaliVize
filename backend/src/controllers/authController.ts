import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function signToken(userId: number, role: number) {
  const secret = process.env.JWT_SECRET || "please_change_me";
  return jwt.sign({ userId, role }, secret, { expiresIn: "7d" });
}

export async function register(req: Request, res: Response) {
  try {
    const { email, password, firstName, lastName } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ message: "Email already in use" });

    const hash = await bcrypt.hash(password, 10);
    // default role 2 (member). If you want to create admin manually, set role:1 in DB or add admin secret.
    const user = await prisma.user.create({
      data: { email, password: hash, firstName, lastName, role: 2 }
    });

    const token = signToken(user.id, user.role);

    // Return token and redirect path client should take
    const redirect = user.role === 1 ? "/dashboard" : "/user";

    res.status(201).json({ token, user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role }, redirect });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken(user.id, user.role);
    const redirect = user.role === 1 ? "/dashboard" : "/user";

    res.json({ token, user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role }, redirect });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function me(req: Request, res: Response) {
  // ensureAuth middleware will set req.user
  const anyReq = req as any;
  if (!anyReq.user) return res.status(401).json({ message: "Not authenticated" });
  const userId: number = anyReq.user.userId;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role });
}