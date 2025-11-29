import express from "express";
import userRouter from "./userRouter";
import courseRoute from "./courseRoute";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRoute);

async function main() {
  await mongoose.connect(
    "mongodb+srv://chouhanrahul1996:rahul1999@cluster1.mm1yzry.mongodb.net/course-app"
  );
  console.log("database is connected");
  app.listen(3000);
}
main()