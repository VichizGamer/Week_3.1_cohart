import express from "express";
import jwt from "jsonwebtoken";

const jwtPassword = "123456";

const app = express();
const port = 3000;

app.use(express.json());

const User_Info = [
  {
    name: "Chinmay",
    username: "ChinmayB@gmail.com",
    pass: "1234",
  },
  {
    name: "Daksh",
    username: "Daksh2010@gmail.com",
    pass: "2010",
  },
  {
    name: "Sushant",
    username: "Sus@gmail.com",
    pass: "1234567",
  },
];

function userCheck(username, password) {
  let userExist = false;
  for (let i = 0; i < User_Info.length; i++) {
    if (User_Info[i].username == username && User_Info[i].pass == password) {
      userExist = true;
    }
  }

  return userExist;
}

app.post("/sign-in", (req, res) => {
  const username = req.body.username;
  const pass = req.body.Password;

  if (!userCheck(username, pass)) {
    res.status(403).json({
      msg: "Invalid detail",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/user", (req, res) => {
  const token = req.headers.Authorization;
  try {
    const decode = jwt.verify(token, jwtPassword);
    const username = decode.username;

    res.json({
      users: User_Info.filter((val) => {
        if (val.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid Token",
    });
  }
});

app.listen(port, () => {
  console.log(`The Server is listing on port ${port}`);
});
