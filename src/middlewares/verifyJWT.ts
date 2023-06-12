import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: "Invalid authorization."
    });
  }

  jsonwebtoken.verify(token, process.env.TOKEN_SECRET!, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid authorization."
      });
    }

    return next();
  });
}