const express = require("express");
const Employee = require("../modules/employee.model.js");
const router = express.Router();
const { getForAttendance,markAttendance, ViewOneAttendance ,deleteAttendance,getTodaysAttendance,getAttendanceByDate} = require('../controllers/daily_attendance.controller.js');

// get all employees for attendance
router.get("/getForAttendance", getForAttendance);


// get an attendance by ID
router.get("/getOneAttendance/:id", ViewOneAttendance);

// mark attendance
router.post("/markAttendance", markAttendance);

//view todays attendance
router.get("/getTodaysAttendance", getTodaysAttendance);

//view attendance by date
router.get("/getAttendanceByDate", getAttendanceByDate);

// delete an attendance
router.delete("/deleteAttendance/:id", deleteAttendance);


module.exports = router;
