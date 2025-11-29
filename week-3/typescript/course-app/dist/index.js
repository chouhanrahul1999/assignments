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
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./userRouter"));
const courseRoute_1 = __importDefault(require("./courseRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", userRouter_1.default);
app.use("/course", courseRoute_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb+srv://chouhanrahul1996:rahul1999@cluster1.mm1yzry.mongodb.net/course-app");
        console.log("database is connected");
        app.listen(3000);
    });
}
main();
