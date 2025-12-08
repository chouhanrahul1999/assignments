//  start writing from here
const mongoose = require("mongoose");
require('dotenv').config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database");
    } catch (err) {
         console.error("Database connection faild,", err);
         process.exit(1)
    }
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String
})

const TodoSchema = new Schema({
    userId: ObjectId,
    title: String,
    completed: Boolean
})

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    connectToDatabase,
    User,
    Todo
}
