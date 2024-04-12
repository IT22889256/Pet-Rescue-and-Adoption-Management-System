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
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(errorHandler);


//user management

//user routes

app.use("/userManager", userManagerRoute);
app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);

//adopter routes
app.use("/api/adopter", adopterRoute);

//end of User Management

const nodemailer = require("nodemailer");
const cron = require("node-cron");

// Middleware
app.use(express.json()); // Parsing incoming requests with JSON payloads
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Parsing incoming requests with URL-encoded payloads

// Connect to database
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL_TEST;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success");
});


// Reset employee leave count every 31st of the month

const {
  resetEmployeeLeaveCount,
} = require("./controllers/employeeLeaveCount.controller.js");


cron.schedule("0 0 28-31 * *", async () => {
  try {
    await resetEmployeeLeaveCount();

    console.log("EmployeeLeaveCount collection reset successfully.");
  } catch (error) {
    console.error("Error resetting EmployeeLeaveCount collection:", error);
  }
});

//import routes

const sponserpetRouter = require('./routes/sponserpet.route');



//const petRouter = require('./routes/pet.route')
const feedbackRouter = require('./routes/feedback.route');
const issuesandconcernsRouter = require('./routes/issuesandconcerns.route');
const galleryRouter = require('./routes/gallery.route');

//complaint
//app.use("/complain", complaintRouter);
//app.use("/petManager", petRouter);
app.use("/userAffairsManager", feedbackRouter);
app.use("/userAffairsManager", issuesandconcernsRouter);
app.use("/userAffairsManager", galleryRouter);

const rescueRequest = require('./routes/rescueRequest.route')
app.use("/petManager", rescueRequest);


const employeeRoute = require("./routes/employee.route.js"); // Importing employee route
const attendanceRoute = require("./routes/daily_attendance.route.js"); // Importing attendance route
const salaryRoute = require("./routes/salary.route.js"); // Importing salary route
const jobRoleRoute = require("./routes/jobRole.route.js"); // Importing job role route
const emailRoute = require("./routes/email.route.js"); // Importing email route
const deactivateEmployeesRoute = require("./routes/deactivateEmployees.route.js"); // Importing deactivate employees route
const employeeLeave = require("./routes/leave.route.js"); // Importing leave route

// Routes
//danuka routes

//import routes

const petRouter = require("./routes/pet.route");

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

//import routes
const sponserpetRouter = require("./routes/sponserpet.route");

//donations

const donationRouter = require('./routes/donation.route');
const reccuringdonationsRouter = require('./routes/reccuringdonation.route');
const specificneeddonationRouter =require('./routes/specificneeddonation.route');
const sponsorDonationRouter = require('./routes/sponsordonation.route');
const financialRoutes = require('./routes/financial.route');




const donationRouter = require("./routes/donation.route");
const reccuringdonationsRouter = require("./routes/reccuringdonation.route");
const specificneeddonationRouter = require("./routes/specificneeddonation.route");
const sponsorDonationRouter = require("./routes/sponsordonation.route");


//import pet routes

const rescueTask = require("./routes/task.route");

//import adoption routes

const adoptionRouter = require("./routes/pet_adoption.route");
const supplyRouter = require("./routes/pet_supply.route");
const appoinmentRouter = require("./routes/appoinment_schedule.route");
const adoptionProcessRouter = require("./routes/adoption_process.route");
const doctorRouter = require("./routes/pet.route");


//import routes(Schedule)
const Schedule = require("./modules/schedule.model.js");
const scheduleRoute = require("./routes/schedule.route.js");

//import routes(vehicle)
const Vehicle = require("./modules/vehicle.model.js");
const vehicleRoute = require("./routes/vehicle.route.js");

//routes(vehicle)
app.use("/api/vehicles", vehicleRoute);

//routes(Schedule)
app.use("/api/schedules", scheduleRoute);

//rescue task

app.use("/petManager", petRouter);


//import inventory routes
const itemRouter = require("./routes/product.route");
const supplierRouter = require("./routes/supplier.routes");
const requestRouter = require("./routes/request.route");
const orderRouter = require("./routes/order.route");

app.use("/inventoryManager", itemRouter);
app.use("/inventoryManager", supplierRouter);
app.use("/inventoryManager", requestRouter);
app.use("/inventoryManager", orderRouter);
app.use("/suppliers", orderRouter);

app.use("/adoptionManager", adoptionRouter);
app.use("/adoptionManager", supplyRouter);
app.use("/adoptionManager", appoinmentRouter);
app.use("/adoptionManager", adoptionProcessRouter);

app.use("/doctor", doctorRouter);

//sponserpet
app.use("/donationManager", sponserpetRouter);

//donations
app.use("/donationManager/donation", donationRouter);
app.use("/donationManager/reccuringdonation", reccuringdonationsRouter);
app.use("/donationManager/specificneedsdonations", specificneeddonationRouter);
app.use("/donationManager/sponsordonation", sponsorDonationRouter);
app.use("/donationManager/financial", financialRoutes);

// app.use('/donationManager',require('./routes/reccuringdonation.route'));

// const rescueTask = require('./routes/task.route');
// app.use("/petManager", rescueTask);



app.use("/petManager", rescueRequest);
app.use("/petManager", rescueTask)



//induwara routes
app.use("/EmployeeManager/employees", employeeRoute); // Employee routes
app.use("/EmployeeManager/attendance", attendanceRoute); // Attendance routes
app.use("/EmployeeManager/salary", salaryRoute); // Salary routes
app.use("/EmployeeManager/jobRole", jobRoleRoute); // Job role routes
app.use("/EmployeeManager/email", emailRoute); // Email routes
app.use("/EmployeeManager/deactivateEmployees", deactivateEmployeesRoute); // Deactivate employees routes
app.use("/EmployeeManager/leave", employeeLeave); // Leave routes


app.listen(PORT, () =>{

    console.log(`Server is up and running on ${PORT}`);


});
