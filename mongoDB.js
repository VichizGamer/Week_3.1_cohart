import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://ChinmayB:Chinmay%40123@cluster0.iq7bom1.mongodb.net/"
);

const user = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const User = new user({
  name: "Chinmay Bagad",
  password: "dnjksf",
  email: "chinmaybagad@gmail.com",
});

User.save();
