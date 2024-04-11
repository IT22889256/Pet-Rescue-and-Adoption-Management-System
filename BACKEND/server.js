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
    origin: "http://localhost:3002", // Adjust accordingly
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


//import routes
const sponserpetRouter = require('./routes/sponserpet.route');


//donations
const donationRouter = require('./routes/donation.route');
const reccuringdonationsRouter = require('./routes/reccuringdonation.route');
const specificneeddonationRouter =require('./routes/specificneeddonation.route');
const sponsorDonationRouter = require('./routes/sponsordonation.route');





//import pet routes

const petRouter = require('./routes/pet.route');


const rescueTask = require('./routes/task.route');
const rescueRequest = require('./routes/rescueRequest.route')
//import adoption routes
const adoptionRouter = require('./routes/pet_adoption.route')
const supplyRouter = require('./routes/pet_supply.route')
const appoinmentRouter = require('./routes/appoinment_schedule.route')
const adoptionProcessRouter = require('./routes/adoption_process.route')
const doctorRouter = require('./routes/pet.route')




//import routes(Schedule)
const Schedule = require('./modules/schedule.model.js');
const scheduleRoute = require('./routes/schedule.route.js');

//import routes(vehicle)
const Vehicle = require('./modules/vehicle.model.js');
const vehicleRoute = require('./routes/vehicle.route.js');

//routes(vehicle)
app.use("/api/vehicles", vehicleRoute);

//routes(Schedule)
app.use("/api/schedules", scheduleRoute);

//rescue task

app.use("/petManager", petRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});



