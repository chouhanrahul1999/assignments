const express = require("express");

const app = express();
app.use(express.json());

const loggier = (req, res, next) => {
 console.log(`Mathod is ${req.method}`)
 console.log(`Host is ${req.url}`);
 console.log(`Status ${res.code}`);
 console.log(new Date())
  next();
};

app.use(loggier);

app.get("/add", function (req, res) {
 
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.status(200).json({
    answer: a + b,
  });
});

app.post("/subtract", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    answer: a - b,
  });
});

app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a / b,
  });
});

app.listen(3000);
