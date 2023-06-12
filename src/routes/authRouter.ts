import express from "express";
import { AuthenticateService } from "../services/authenticate";

const docsRouter = express.Router();
const authService = new AuthenticateService();

docsRouter.post("/login", async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) return res.status(400).json({
    message: "User and password are required."
  });

  try {
    const authentication = await authService.authenticate(user, password);
    return res.json(authentication);
  } catch (e: any) {
    return res.status(401).json({
      message: e.message
    })
  }
});
export default docsRouter;