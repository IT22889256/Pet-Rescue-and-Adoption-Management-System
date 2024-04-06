const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
require('dotenv').config();
const nodemailer = require('nodemailer');
const moment = require('moment');
const cron = require('node-cron');


// Middleware
app.use(express.json()); // Parsing incoming requests with JSON payloads
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Parsing incoming requests with URL-encoded payloads

//special induwara automated feature for reset employee leave count every 1st month
// const {resetEmployeeLeaveCount } = require('./controllers/employeeLeaveCount.controller.js');


// Connect to database
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL_TEST;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection success');
})



//original one
// cron.schedule('0 0 1 * *', () => {
//   resetEmployeeLeaveCount();
// });


// Schedule the job to run every 10 minutes
// cron.schedule('*/1 * * * *', async () => {
//   try {
//     await resetEmployeeLeaveCount();

//     console.log('EmployeeLeaveCount collection reset successfully.');
//   } catch (error) {
//     console.error('Error resetting EmployeeLeaveCount collection:', error);
//   }
// });

//import routes
const complaintRouter = require('./routes/complaint.route');
const petRouter = require('./routes/pet.route')

const employeeRoute = require("./routes/employee.route.js"); // Importing employee route
const attendanceRoute = require("./routes/daily_attendance.route.js"); // Importing attendance route
const salaryRoute = require("./routes/salary.route.js"); // Importing salary route
const jobRoleRoute = require("./routes/jobRole.route.js"); // Importing job role route
const emailRoute = require("./routes/email.route.js"); // Importing email route
const deactivateEmployeesRoute = require("./routes/deactivateEmployees.route.js"); // Importing deactivate employees route



// Routes
//danuka routes
app.use("/complain", complaintRouter);
app.use("/petManager", petRouter);

//induwara routes
app.use("/EmployeeManager/employees", employeeRoute); // Employee routes
app.use("/EmployeeManager/attendance", attendanceRoute); // Attendance routes
app.use("/EmployeeManager/salary", salaryRoute); // Salary routes
app.use("/EmployeeManager/jobRole", jobRoleRoute); // Job role routes
app.use("/EmployeeManager/email", emailRoute); // Email routes
app.use("/EmployeeManager/deactivateEmployees", deactivateEmployeesRoute); // Deactivate employees routes



app.listen(PORT, () =>{
  console.log(`Server is up and running on ${PORT}`);
});

