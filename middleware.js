import express from "express";

const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
  const userName = req.headers.username;
  const pass = req.headers.pass;

  if (!(userName === "Chinmay" && pass === "pass")) {
    res.status(403).json({
      msg: "User Not Found",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (!(kidneyId == 1 || kidneyId == 2)) {
    res.status(403).json({
      msg: "Invalid Input",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  //Logic of this function

  res.send("Your Health is Good");
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  //Logic of this function

  res.send("Your Kidney is Great :)");
});

app.get("/heart-checkup", userMiddleware, (req, res) => {
  //Logic of this function

  res.send("Your is Heart Good");
});

app.listen(port, () => {
  console.log(`Server is Listing on port ${port}`);
});
