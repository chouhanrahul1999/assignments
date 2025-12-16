const express = require("express");
const jwt = require("jsonwebtoken");
const { Admin, Course } = require('../database/module');
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    try {
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(403).json({ message: "Admin already exists" })
        }

        await Admin.create({ username, password });
        const token = jwt.sign({ username, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({
            message: "Admin created successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username & Password required" })
    }

    try {
        const admin = await Admin.findOne({ username: username, password: password })
        if (!admin) {
            return res.status(403).json({ message: "Invalid username or password" })
        }
        const token = jwt.sign({ username, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.status(200).json({
            message: "Logged in successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.post('/courses', authMiddleware, async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({ message: "Course created successfully", courseId: course._id });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

})

router.put('/courses/:courseId', authMiddleware, async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const updateCourse = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
        if (updateCourse) {
            res.json({ message: 'Course updated successfully'})
        } else {
            res.status(404).json({ message: 'Course not found'})
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.get('/courses', authMiddleware, async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({ courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;
