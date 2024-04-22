const express = require("express");
const Employee = require("../modules/employee.model.js");
const router = express.Router();
const { getForAttendance,markAttendance,getAllAttendance, ViewOneAttendance ,deleteAttendance,getEmployeeAttendanceDays} = require('../controllers/daily_attendance.controller.js');

// get all employees for attendance
router.get("/getForAttendance", getForAttendance);

// get all attendance
router.get("/getAllAttendance", getAllAttendance);

// get an attendance by ID
router.get("/getOneAttendance/:id", ViewOneAttendance);

// mark attendance
router.post("/markAttendance", markAttendance);

// get employee attendance days
router.get("/getEmployeeAttendanceDays/:id", getEmployeeAttendanceDays);


// delete an attendance
router.delete("/deleteAttendance/:id", deleteAttendance);


module.exports = router;
