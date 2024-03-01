const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const User = require("./models/user.mdels.js");

//user management
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/", (req, res) => {
  res.send("hellow");
});

//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create a user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get one user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//end of User Management

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL_TEST;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
