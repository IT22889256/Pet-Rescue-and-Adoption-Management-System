const express = require('express');
const router = express.Router();
const { displaySponseredPets, addSponseredPet, editSponseredPet, displayOneSponseredPet, deleteSponseredPet } = require('../controllers/sponserpet.contoller');

//display all sponsered pet
router.get('/sponseredPet', displaySponseredPets);

// create a sponsered pet
router.post('/sponseredPet/createSponseredPet', addSponseredPet);

// edit a sponsered pet
router.put('/sponseredPet/editSponseredPet/:id', editSponseredPet);

//display one sponsered pet
router.get('/sponseredPet/:id', displayOneSponseredPet)

//delete a sponsered pet
router.delete('/sponseredPet/removeSponseredPet/:id', deleteSponseredPet);

module.exports = router;
