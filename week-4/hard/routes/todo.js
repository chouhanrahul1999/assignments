const { Router, json } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database/index")
const router = Router();

// todo Routes
router.post('/', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    const { title, priority, desc, date, time } = req.body;

    try {
        const todo = await Todo.create({
            title, priority, desc, date, time, userId: req.userId
        })
        res.status(201).json({ message: "Todo created", todo });
    } catch (err) {
        res.status(500).json({
            message: "Error creating todo",
            error: err.message,
        });
    }
});

router.put('/', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const { id, title, priority, desc, date, time } = req.body;

    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: id, userId: req.userId },
            { title, priority, desc, date, time },
            { new: true }
        );
        res.json({ message: "Todo updated", todo });
    } catch (err) {
        res.status(500).json({
            message: "Error updating todo",
            error: err.message,
        });
    };
});

router.delete('/', adminMiddleware, async (req, res) => {
    // Implement delete todo logic
    try {
        await Todo.deleteMany({ userId: req.userId });
        res.json({ message: "All todos deleted" });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting todos",
            error: err.message,
        });
    }
});

router.delete('/:id', adminMiddleware, async (req, res) => {
    // Implement delete todo by id logic
    try {
        await Todo.findOneAndDelete({ id: req.params.id, userId: req.userId });
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting todo",
            error: err.message,
        });
    }

});


router.get('/', adminMiddleware, async (req, res) => {
    // Implement fetching all todo logic
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

router.get('/:id', adminMiddleware, async (req, res) => {
    // Implement fetching todo by id logic
    try {
        const todo = await Todo.findOne({ id: req.params.id, userId: req.userId })
        res.json({ todo });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching todo",
            error: err.message,
        });
    }
});

module.exports = router;
