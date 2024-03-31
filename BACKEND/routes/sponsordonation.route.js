const route = require('express').Router();
const {displayReccuringDonations, addReccuringDonation, editReccuringDonation, displayOneReccuringDonation, deleteReccuringDonation} = require('../controllers/reccuringdonation.controller');  

//display all recurring donations
route.get('/display', displayReccuringDonations);

// create a recurring donation
route.post('/add' , addReccuringDonation);

//  update a recurring donation
route.put('/update/:id', editReccuringDonation);

//delete a recurring donation
route.delete('/:id', deleteReccuringDonation);

//display one recurring donation
route.get('/display/:id', displayOneReccuringDonation);

module.exports = route;
// Path: routes/sponsordonation.route.js
// Compare this snippet from controllers/sponsordonation.controller.js:
