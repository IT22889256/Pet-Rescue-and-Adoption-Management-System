const express = require("express");
const Salary = require("../modules/salary.model.js");
const router = express.Router();
const { getSalaries, getSalary, createSalary, updateSalary, deleteSalary,calculateTotalSalary ,getForSalaryCreate} = require('../controllers/salary.controller.js');

// get all employees for salary create
router.get('/getForSalaryCreate', getForSalaryCreate);

// get all salaries
router.get('/', getSalaries);

// get a salary
router.get("/:id", getSalary);

// create a salary
router.post("/", createSalary);

// update a salary
router.put("/:id", updateSalary);

// delete a salary
router.delete("/:id", deleteSalary);

// calculate total salary
router.post("/reqFund", calculateTotalSalary);

module.exports = router;
