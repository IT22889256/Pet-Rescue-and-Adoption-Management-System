const router = require('express').Router();
const {createRequest, getAllRequests, getRequestById, updateRequest, deleteRequest} = require('../controllers/requestFunds.contoller');


//display all Fund Request
router.get('/display', getAllRequests);

//create Fund Request
router.post('/createrequests', createRequest);

//display One Fund Request
router.get('/viewrequests/:id', getRequestById);

//Edit a Fund Request
router.put('/updaterequests/:id', updateRequest);

//delete a Fund Request
router.delete('/deleteRequest/:id', deleteRequest);

module.exports = router;

