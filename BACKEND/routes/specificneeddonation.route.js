const router = require('express').Router();
const {displaySpecificNeedDonations, addSpecificNeedDonation, editSpecificNeedDonation, displayOneSpecificNeedDonation, deleteSpecificNeedDonation} = require('../controllers/specificneeddonation.controller');

//display all specific need donations
router.get('/display', displaySpecificNeedDonations);

// create a specific need donation
router.post('/add' , addSpecificNeedDonation);

// update a specific need donation
router.put('/update/:id', editSpecificNeedDonation);

//delete a specific need donation
router.delete('/:id', deleteSpecificNeedDonation);

//display one specific need donation
router.get('/display/:id', displayOneSpecificNeedDonation);

module.exports = router;
// Path: controllers/specificneeddonation.controller.js