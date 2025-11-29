import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = "rahul"

const app = express();
app.use(express.json());

interface AuthRequest extends Request {
  username?: string;
}


const userMiddleWare  = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization as string;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decodeToken = jwt.verify(token, JWT_SECRET) as { username: string };
        if (decodeToken.username) {
            req.username = decodeToken.username;
            next();
        } else {
            return res.status(401).json({ message: "Invalid token payload" });
        }
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default userMiddleWare;