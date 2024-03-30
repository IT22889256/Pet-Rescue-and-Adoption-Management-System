const router = require('express').Router();
const {displayRescueRequests, createRescueRequest, displayOneRescueRequest,acceptRescueRequest} = require('../controllers/rescueRequest.controller');

//display all Rescue Request
router.get('/rescueRequest', displayRescueRequests);

//create Rescue Request
router.post('/rescueRequest/createRescueRequest', createRescueRequest);

// //Edit a Rescue Request
// router.put('/rescueRequest/editRescueTask/:id', editPet);

//display One Rescue Request
router.get('/rescueRequest/viewRescueRequest/:id', displayOneRescueRequest)

// //delete a Rescue Request
// router.delete('/rescueRequest/deleteRescueTask/:id', deletePet);

//accept Rescue Request
router.put('/rescueRequest/viewRescueRequest/:id',acceptRescueRequest)

module.exports = router;