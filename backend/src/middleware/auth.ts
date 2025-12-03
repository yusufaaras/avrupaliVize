import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });
  const parts = authHeader.split(" ");
  if (parts.length !== 2) return res.status(401).json({ message: "Token error" });
  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ message: "Token malformatted" });

  const secret = process.env.JWT_SECRET || "please_change_me";
  try {
    const decoded = jwt.verify(token, secret) as any;
    (req as any).user = decoded; // { userId, role }
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }
}

export function ensureRole(requiredRole: number) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user) return res.status(401).json({ message: "Not authenticated" });
    // role as numeric - 1 admin, 2 member
    if (user.role !== requiredRole) return res.status(403).json({ message: "Forbidden: incorrect role" });
    return next();
  };
}