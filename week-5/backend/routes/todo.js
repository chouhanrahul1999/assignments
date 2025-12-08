//  start writing your code from here
const express = require('express');
const { authMiddleware } = require('../middleware/user');
const { Todo } = require('../db/index');

const router = express.Router();
router.use(authMiddleware);

router.post('/', async (req, res) => {
    const createPayload = req.body;
    console.log(req.userId);

    if (!createPayload.title) {
        return res.status(400).json({ message: "You have provided wrong input." })
    }

    try {
        const newTodo = await Todo.create({
            title: createPayload.title,
            completed: false,
            userId: req.userId
        })

        res.status(201).json({
            message: "Todo created successfully",
            newTodo
        })
    } catch (err) {
        res.status(501).json({
            message: "Error in creating todo",
            error: err.message
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId });

        res.json({
            todos: todos,
        })
    } catch (err) {
        res.status(501).json({
            message: "Error in fetching todos",
            error: err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatePayload = req.body;
    if (updatePayload.completed === 'undefined') {
        res.status(400).json({
            message: "You must provide complete status"
        })
    }

    try {
        const update = await Todo.updateOne(
            { _id: id },
            { completed: updatePayload.completed }
        )
        res.json({ message: "Marked todo as Completed." })
    } catch (err) {
        res.status(501).json({
            message: "Error in updating todo",
            error: err.message
        })
    }
})

module.exports = router;
