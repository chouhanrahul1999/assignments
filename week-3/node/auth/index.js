const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'rahul';

const app = express();
app.use(express.json());

const users = [];



app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.status(200).json({
    message: "your account is created",
  });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((u) => {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (user) {
    const token = jwt.sign({
        username: username
    }, JWT_SECRET);
    // user.token = token;
    res.json({
      message: token,
    });
  } else {
    res.json({
      message: "incorrect cradential",
    });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.authorization;
  const decodedUser = jwt.verify(token, JWT_SECRET);
  const username = decodedUser.username;

  const user = users.find((user) => user.username === username);
  if (user) {
    res.send({
      username: user,
    });
  } else {
    res.status(401).send({
      message: "unauthroize",
    });
  }
});

app.listen(3000);
