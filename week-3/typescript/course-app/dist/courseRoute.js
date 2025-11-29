"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseRoute = (0, express_1.Router)();
courseRoute.post("/purchage", (req, res) => {
    res.status(200).json({
        message: "you have sucessfully purchaged the course",
    });
});
courseRoute.get("/", (req, res) => { });
exports.default = courseRoute;
