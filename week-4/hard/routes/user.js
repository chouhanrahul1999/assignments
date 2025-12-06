const { Router } = require("express");
const { User, Todo } = require("../database");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");



// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;

    try {
        await User.create({ username, password });
        res.status(201).json({ message: "User created sucessfully" });
    } catch (err) {
        res.status(400).json({
            err,
            message: "User already exist",
        });
    }
});

router.post("/login", async (req, res) => {
    // Implement user login logic
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SIGN);
        res.json({ token })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
});

router.get("/todos", userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user
    try {
        const todos = await Todo.find({ userId: req.userId });
        res.json({ todos });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching todos",
            error: err.message,
        });
    }
});

router.post("/logout", userMiddleware, (req, res) => {
    // Implement logout logic
    res.json({ message: "Logged our successfully" });
});

module.exports = router;
