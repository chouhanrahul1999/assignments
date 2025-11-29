import { Application, Router } from "express";
import { courseModel } from "./db";

const courseRoute = Router();

  courseRoute.post("/purchage", (req, res) => {

    
    res.status(200).json({
      message: "you have sucessfully purchaged the course",
    });
  });

  courseRoute.get("/", (req, res) => {});


export default courseRoute;
