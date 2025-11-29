import { Request, Response, Router } from "express";
import { userModel } from "./db";
import jwt from "jsonwebtoken";
const JWT_SECRET = "rahul";

const userRouter = Router();

userRouter.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  await userModel.create({ username: username, password: password });

  res.status(200).json({
    message: "hi",
  });
  console.log(userModel.create)
});

userRouter.post("/signin", (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const findUser = userModel.find({ username, password });

  if (!findUser) {
    res.json({
      message: "incorrect cradential",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.status(200).json({
      token,
      message: "signin completed",
    });
  }
});

userRouter.get("/purchases", (req, res) => {
  res.status(200).json({
    message: "purchage cources",
  });
});

export default userRouter;
