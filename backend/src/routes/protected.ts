import { Router } from "express";
import { ensureAuth, ensureRole } from "../middleware/auth";

const router = Router();

router.get("/dashboard", ensureAuth, ensureRole(1), (_req, res) => {
  res.json({ message: "Welcome admin to /dashboard" });
});

router.get("/user", ensureAuth, ensureRole(2), (_req, res) => {
  res.json({ message: "Welcome member to /user" });
});

export default router;