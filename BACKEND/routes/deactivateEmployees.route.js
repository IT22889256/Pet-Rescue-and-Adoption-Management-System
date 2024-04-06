const express = require("express");
const Employee = require("../modules/employee.model.js");
const router = express.Router();
const { GetDeactiveEmployees,GetUnavailableEmployeeById} = require('../controllers/deactivateEmployees.controller.js');


// get all deactive employees
router.get("/", GetDeactiveEmployees);

// get an unavailable employee
router.get("/:id", GetUnavailableEmployeeById);






module.exports = router;
