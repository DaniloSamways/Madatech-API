import express from "express";
import { UserService } from "../services/user";

const userRouter = express.Router();
const userService = new UserService();

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "Missing user id." });

  try {
    const user = await userService.getUserById(Number(id));
    return res.json(user);
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
});

export default userRouter;