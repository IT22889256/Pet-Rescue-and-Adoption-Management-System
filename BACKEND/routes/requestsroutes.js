const router = require('express').Router();
const {displayrequests, createrequests, editrequests,acceptrequest,displayOnerequests,rejectrequests} = require('../controllers/requests.controller');

// displayrequests,
//   createrequests,
//   editrequests,
//   acceptrequest,
//   displayOnerequests,
//   rejectrequests
//display all Rescue Request
router.get('/requests', displayrequests);

//create Rescue Request
router.post('/requests/createrequests', createrequests);

// //Edit a Rescue Request
// router.put('/rescueRequest/editrequests/:id', editPet);

//display One Rescue Request
router.get('/requests/viewrequests/:id', displayOnerequests)

// //delete a Rescue Request
// router.delete('/rescueRequest/deleteRescueTask/:id', deletePet);

//accept Rescue Request
router.put('/requests/acceptrequest/:id',acceptrequest)

module.exports = router;