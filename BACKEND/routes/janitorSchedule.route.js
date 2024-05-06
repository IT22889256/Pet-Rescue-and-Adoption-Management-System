const express = require("express");
const router = express.Router();

const { getJanitorSchedules, getJanitorSchedule, createJanitorSchedule, updateJanitorSchedule, deleteJanitorSchedule } = require('../controllers/janitorSchedule.controller.js');

// get all schedules
router.get('/', getJanitorSchedules);

// get a schedule
router.get("/:id", getJanitorSchedule);

// create a schedule
router.post("/", createJanitorSchedule);

// update a schedule
router.put("/:id", updateJanitorSchedule);

// delete a schedule
router.delete("/:id", deleteJanitorSchedule);

module.exports = router;
