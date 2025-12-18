//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Mongodb'))
    .catch(err => console.error('Mongodb connection error:', err));

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Course Management System API');
})

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});
