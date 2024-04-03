const express = require("express");
const DeletedEmployee = require("../modules/deleted_employee.model.js");
const router = express.Router();
const {getDeletedEmployees } = require('../controllers/deletedEmployee.controller.js');




router.get("/", getDeletedEmployees);

module.exports = router;