"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "rahul";
const userRouter = (0, express_1.Router)();
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    yield db_1.userModel.create({ username: username, password: password });
    res.status(200).json({
        message: "hi",
    });
    console.log(db_1.userModel.create);
}));
userRouter.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const findUser = db_1.userModel.find({ username, password });
    if (!findUser) {
        res.json({
            message: "incorrect cradential",
        });
        return;
    }
    else {
        const token = jsonwebtoken_1.default.sign({
            username,
        }, JWT_SECRET);
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
exports.default = userRouter;
