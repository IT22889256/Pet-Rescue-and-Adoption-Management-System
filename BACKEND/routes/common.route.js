const router = require('express').Router();
const {displayTask,editTask,displayOneTask} = require('../controllers/common.controller')

//display all task
router.get('/common', displayTask);

// create a task
router.post('/common/createRescueTask' , addTask);

// // update a complaint
// router.put('/update/:id', updateComplaint);

//update a task

router.put('/rescueTask/editRescueTask/:id', editTask);

// //delete a complaint
// router.delete('/:id', deleteComplaint);

//display one complaint
router.get('/rescueTask/viewRescueTask/:id', displayOneTask)

module.exports = router;