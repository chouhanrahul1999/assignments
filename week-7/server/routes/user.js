const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../database/module");
const authMiddleware = require("../middleware/auth");



const router = express.Router();

router.post("/signup", async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" })
    }

    try {
        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            await User.create({ username: username, password: password });

            const token = jwt.sign({ username, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.status(201).json({
                message: "User created successfully",
                token: token
            })
        } else {
            res.status(403).json({ message: "User already exists" })
        }

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username & password required" });
    }

    try {
        const user = await User.findOne({ username, password });

        if (user) {
            const token = jwt.sign({ username, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.status(200).json({
                message: "You are signed in successfully.",
                token: token
            })
        } else {
            res.status(403).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.get("/courses", authMiddleware, async (req, res) => {
    try {
        const courses = await Course.find({
            published: true
        });

        res.json({ courses })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.post("/courses/:courseId", authMiddleware, async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        const user = await User.findOne({ username: req.user.username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.purchasedCourses.includes(courseId)) {
            return res.status(400).json({ message: "Course already purchased" });
        }

        user.purchasedCourses.push(courseId);
        await user.save();
        res.json({ message: "Course purchased successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

router.get("/purchasedCourses", authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ purchasedCourses: user.purchasedCourses || [] })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;
