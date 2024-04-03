const express = require("express");
const Employee = require("../modules/employee.model.js");
const DeletedEmployee = require("../modules/deleted_employee.model.js");
const router = express.Router();
const { getLeaves, getOneLeave,requestLeave ,markLeave, viewLeave,deleteLeave, deleteAllLeaves} = require('../controllers/leave.controller.js');



//request for leave (employee)
router.post("/requestLeave", requestLeave);

// view leave
router.get("/getLeave/:id", viewLeave);

// get all Leaves employee manager
router.get("/getLeaves", getLeaves);

// get an leave by ID
router.get("/getLeave/:id", getOneLeave);

// mark leave
router.post("/markLeave", markLeave);

//delete leave
router.delete("/deleteLeave", deleteLeave);

//delete all leaves
router.delete("/deleteAllLeaves", deleteAllLeaves);


module.exports = router;