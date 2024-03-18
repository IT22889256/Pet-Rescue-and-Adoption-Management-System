const router = require('express').Router();
const Complaint = require('../modules/complaint.model');
const {addComplaint, displayComplaints, updateComplaint, deleteComplaint,displayOneComplaint} = require('../controllers/complaint.controller');

//display all complaints
router.get('/display', displayComplaints);

// create a complaint
router.post('/add' , addComplaint);

// update a complaint
router.put('/update/:id', updateComplaint);

//delete a complaint
router.delete('/:id', deleteComplaint);

//display one complaint
router.get('/display/:id', displayOneComplaint)

module.exports = router;