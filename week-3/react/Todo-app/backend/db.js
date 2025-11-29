const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chouhanrahul1996:rahul1999@cluster1.mm1yzry.mongodb.net/");
const todoScema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoScema)

module.exports = {
    todo
}