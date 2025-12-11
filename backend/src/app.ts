import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import protectedRouter from "./routes/protected";

const app = express();

// CORS: frontend 3000 varsayılan, env ile override edilebilir
const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:3000";
const corsOptions = {
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

app.get("/", (_req, res) => res.json({ ok: true, message: "API alive" }));

export default app;