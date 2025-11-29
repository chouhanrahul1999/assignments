"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "rahul";
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userMiddleWare = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decodeToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        if (decodeToken.username) {
            req.username = decodeToken.username;
            next();
        }
        else {
            return res.status(401).json({ message: "Invalid token payload" });
        }
    }
    catch (_a) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
exports.default = userMiddleWare;
