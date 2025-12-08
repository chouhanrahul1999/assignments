// start writing from here
const express = require("express");
const cors = require("cors");
const todoRoute = require("./routes/todo");
const userRouter = require("./routes/user");
const { connectToDatabase } = require("./db/index");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoute);
app.use("/user", userRouter);

connectToDatabase().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is runnig on port ${3000}`);
    });
});
