//  start writing your code from here
const express = require('express');
const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
const { SECRET } = require("../middleware/user");
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            return res.status(403).json({
                message: "User already exist"
            })
        }

        const newUser = new User({ username, password });
        await newUser.save();

        res.json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error in creating user,", error: err.message });
    }
})

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            const token = jwt.sign({ userId: user._id }, SECRET, {
                expiresIn: '1h'
            });

            res.json({ message: "You have logged in successfully", token })
        } else {
            res.status(403).json({
                message: "Invalid username or password"
            })
        }
    } catch (err) {
        res.status(500).json({ message: "Error in signing in", error: err.message });
    }
})

module.exports = router;
