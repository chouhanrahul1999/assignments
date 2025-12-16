const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // userSchema here
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const adminSchema = new mongoose.Schema({
    // adminSchema here
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const courseSchema = new mongoose.Schema({
    // courseSchema here
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageLink: { type: String, required: true },
    published: { type: Boolean, default: false }
});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { User, Admin, Course };
