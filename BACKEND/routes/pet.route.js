const router = require('express').Router();
const {addPet, displayPets,editPet, displayOnePet, deletePet} = require('../controllers/pet.controller');

//display all pet
router.get('/petProfile', displayPets);
router.get('/petHealth', displayPets);

// create a pet
router.post('/petProfile/createPet', addPet);

// edit a pet
router.put('/petProfile/editPet/:id', editPet);
router.put('/petHealth/editPet/:id', editPet);

//display one pet
router.get('/petProfile/viewPet/:id', displayOnePet)
router.get('/petHealth/viewPet/:id', displayOnePet);

//delete a complaint
router.delete('/petProfile/removePet/:id', deletePet);


module.exports = router;