const express = require("express");
const Appoinment = require("../modules/appoinment_schedule.model.js");
const router = express.Router();
const { getAppoinments, getAppoinment, createAppoinment, updateAppoinment, deleteAppoinment } = require('../controllers/appoinment_schedule.controller.js');

router.get('/AppoinmentSchedule', getAppoinments);
// router.get("/:id", getAdoption);

// create an adoption
router.post("/AppoinmentSchedule/CreateAppoinment",createAppoinment );

//view an adoption
router.get("/AppoinmentSchedule/viewAppoinment/:id", getAppoinment)

// update an adoption
router.put("/AppoinmentSchedule/EditAppoinment/:id", updateAppoinment);

// delete an adoption
router.delete("/AppoinmentSchedule/DeleteAppoinment/:id", deleteAppoinment);

module.exports = router;
