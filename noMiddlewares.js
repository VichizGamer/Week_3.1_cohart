import express from "express";

const app = express();
const port = 3000;

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const pass = req.headers.pass;

  if (!(username === "Chinmay" && pass === "Chinu")) {
    res.status(403).json({
      msg: "User Not Found",
    });

    return;
  }
  //   if (kidneyId != 1 || kidneyId != 2) {
  //     res.status(403).json({
  //       msg: "Invalid Inputs",
  //     });
  //     return;
  //   }

  res.send("Your Heart is healthy");
});

app.listen(port, () => {
  console.log(`The Server is Listining on port ${port}`);
});
