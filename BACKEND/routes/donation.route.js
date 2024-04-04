const router = require('express').Router();
const {displayDonations, addDonation, editDonation, displayOneDonation, deleteDonation} = require('../controllers/donation.controller');

//display all donation
router.get('/display', displayDonations);

// create a donation
router.post('/add', addDonation);

// edit a donation
router.put('/edit/:id', editDonation);

//display one donation
router.get('/display/:id', displayOneDonation)

//delete a donation
router.delete('/remove/:id', deleteDonation);

module.exports = router;