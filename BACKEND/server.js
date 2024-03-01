const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const userRoutes = require("./routes/user.route.js");

//user management
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hellow");
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
