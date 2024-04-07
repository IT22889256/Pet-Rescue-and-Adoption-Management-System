const express = require("express");
const Employee = require("../modules/employee.model.js");
const router = express.Router();
const { GetUnavailableEmployees,GetUnavailableEmployeeById,ActivateEmployee} = require('../controllers/deactivateEmployees.controller.js');


// get all deactive employees
router.get("/", GetUnavailableEmployees);

// get an unavailable employee
router.get("/:id", GetUnavailableEmployeeById);

// activate an employee
router.put("/activate/:id", ActivateEmployee);







module.exports = router;
