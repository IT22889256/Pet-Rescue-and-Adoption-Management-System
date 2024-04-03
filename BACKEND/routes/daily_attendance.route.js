const express = require("express");
const Employee = require("../modules/employee.model.js");
const DeletedEmployee = require("../modules/deleted_employee.model.js");
const router = express.Router();
const { getForAttendance,markAttendance,getAllAttendance, getOneAttendance ,deleteAttendance} = require('../controllers/daily_attendance.controller.js');

// get all employees for attendance
router.get("/getForAttendance", getForAttendance);

// get all attendance
router.get("/getAllAttendance", getAllAttendance);

// get an attendance by ID
router.get("/getOneAttendance/:id", getOneAttendance);

// mark attendance
router.post("/markAttendance", markAttendance);

//update attendance
//router.put("/updateAttendance/:id", updateAttendance);

// delete an attendance
router.delete("/deleteAttendance/:id", deleteAttendance);


module.exports = router;
