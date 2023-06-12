import express from "express";
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import { verifyJWT } from "../middlewares/verifyJWT";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", verifyJWT, userRouter);

export default router;