const express = require('express');
const router = express.Router();
const { displaySponsorDonations,addSponsorDonation,editSponsorDonation,displayOneSponsorDonation,deleteSponsorDonation } = require('../controllers/sponsordonation.contoller');

//display all sponsor donations
router.get('/display', displaySponsorDonations);

// create a sponsor donation
router.post('/add', addSponsorDonation);

// edit a sponsor donation
router.put('/update/:id', editSponsorDonation);

//display one sponsor donation
router.get('/display/:id', displayOneSponsorDonation);

//delete a sponsor donation
router.delete('/delete/:id', deleteSponsorDonation);

module.exports = router;