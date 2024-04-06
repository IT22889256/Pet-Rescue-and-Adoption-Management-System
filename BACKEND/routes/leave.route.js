const express = require("express");
const Employee = require("../modules/employee.model.js");
const router = express.Router();
const { getLeaves, getOneLeave,requestLeave ,acceptLeave,deleteLeave, deleteAllLeaves,rejectLeave} = require('../controllers/leave.controller.js');
const{viewLeaveCount} = require('../controllers/employeeLeaveCount.controller.js');



//request for leave (employee)
router.post("/requestLeave", requestLeave);

// view leave count by id
router.get("/viewLeaveCount/:id", viewLeaveCount);

// get all Leaves employee manager
router.get("/getLeaves", getLeaves);

// get an leave by ID
router.get("/getLeave/:id", getOneLeave);

// accept leave
router.put("/acceptLeave/:id", acceptLeave);

//reject leave
router.put("/rejectLeave/:id", rejectLeave);

//delete leave
router.delete("/deleteLeave/:id", deleteLeave);

//delete all leaves
router.delete("/deleteAllLeaves", deleteAllLeaves);


module.exports = router;