const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/taskify");

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    priority: String,
    desc: String,
    date: String,
    time: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
    User,
    Todo,
};
