const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user.route");
const userManagerRoute = require("./routes/userManager.route");
const adopterRoute = require("./routes/adopter.route");
const errorHandler = require("./middleWare/errorMiddleware");
const path = require("path");
const chatRoute = require("./routes/chatroute");

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001", // Adjust accordingly
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL_TEST;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success");
});

//import routes
const complaintRouter = require("./routes/complaint.route");
const petRouter = require("./routes/pet.route");

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});
//complaint
app.use("/complain", complaintRouter);
app.use("/petManager", petRouter);

//user routes

app.use("/userManager", userManagerRoute);
app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);

//adopter routes
app.use("/api/adopter", adopterRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
