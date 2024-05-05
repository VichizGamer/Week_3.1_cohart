import express from "express";

const app = express();
const port = 3000;

let st;
let et;

function start(req, res, next) {
  st = Date.now();
  next();
}

function end(req, res, next) {
  et = Date.now();
  next();
}

app.get("/", start, end, (req, res) => {
  const timeTaken = st - et;
  const average = timeTaken / 1000;
  res.json({
    msg: "Done!",
    time: average,
  });
});

app.listen(port, () => {
  console.log(`The Server is Listing on port ${port}`);
});
