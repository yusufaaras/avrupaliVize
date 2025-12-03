import express from "express";
import authRouter from "./routes/auth";
import protectedRouter from "./routes/protected";
import express.json from "express";

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

app.get("/", (_req, res) => res.json({ ok: true, message: "API alive" }));

export default app;