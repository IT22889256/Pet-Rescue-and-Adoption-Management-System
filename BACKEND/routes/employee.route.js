const express = require("express");
const Employee = require("../modules/employee.model.js");
const router = express.Router();
const { getEmployees, getEmployee, getEmployeeByEmployeeId, createEmployee, updateEmployee, updateEmployeeByEmployeeId, DeleteEmployee} = require('../controllers/employee.controller.js');


// get all employees
router.get('/', getEmployees);

// get an employee
router.get("/:id", getEmployee);

// get an employee by employee ID
router.get("/getByeid/:eid", getEmployeeByEmployeeId);


// create an employee
//router.post("/", upload.single('photo'), createEmployee);
router.post("/", createEmployee);


// update an employee
router.put("/:id", updateEmployee);

// update an employee by employee ID
router.put("/updateByeid/:eid", updateEmployeeByEmployeeId);


// going to delete an employee
router.put("/DeleteEmployee/:id", DeleteEmployee);




module.exports = router;
