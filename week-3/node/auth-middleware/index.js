const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rahulsingh";
const users = [];
const app = express();

app.use(express.json());

const auth = (req, res, next) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.user = decodedData.username
    next();
  } else {
    res.json({
      message: "unauthroize user",
    });
  }
};
app.get('/', (req,res) => {
res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    res.status(400).json({
      message: "user already exist",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });

  res.status(200).json({
    message: "user created",
  });

  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!foundUser) {
    res.json({
      message: "user not found",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token
    });
  }
  console.log(users);
});

app.get("/me", auth, (req, res) => {
  const user = users.find((user) => 
    user.username === req.user
);

  if (user) {
    res.json({
      username: user.username,
      password: user.password,
    });
  }
});

app.listen(3000);
