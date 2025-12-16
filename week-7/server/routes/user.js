const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../database/module");


const router = express.Router();

router.post("/signup", async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(403).json({ message: "Username and password required" })
    }

    try {
        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            await User.create({ username: username, password: password });

            const token = jwt.sign({ username, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1hr" });

            res.status(200).json({
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
