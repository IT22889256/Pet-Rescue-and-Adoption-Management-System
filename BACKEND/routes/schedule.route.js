const express = require('express');
const Schedule = require('../modules/schedule.model');
const router = express.Router();
const {getSchedules, getSchedule, createSchedule, updateSchedule, deleteSchedule} = require('../controllers/schedule.controller.js');


//get all schedules
router.get("/", getSchedules); 

//get schedule by id
router.get('/:id', getSchedule);

//create schedule
router.post("/", createSchedule);

//update schedule
router.put("/:id", updateSchedule);

//delete schedule
router.delete("/:id", deleteSchedule);

module.exports = router;