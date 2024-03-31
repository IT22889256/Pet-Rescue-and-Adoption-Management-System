const router = require('express').Router();

const {displayReccuringDonations, addReccuringDonation, editReccuringDonation, displayOneReccuringDonation, deleteReccuringDonation} = require('../controllers/reccuringdonation.controller');

//display all recurring donations
router.get('/display', displayReccuringDonations);

// create a recurring donation
router.post('/add' , addReccuringDonation);

// update a recurring donation
router.put('/update/:id', editReccuringDonation);

//delete a recurring donation
router.delete('/:id', deleteReccuringDonation);

//display one recurring donation
router.get('/display/:id', displayOneReccuringDonation);

module.exports = router;


