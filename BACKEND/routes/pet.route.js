const router = require('express').Router();
const {addPet, displayPets,editPet, displayOnePet, deletePet} = require('../controllers/pet.controller');

//display all pet
router.get('/petProfile', displayPets);

// create a pet
router.post('/petProfile/createPet', addPet);

// edit a pet
router.put('/petProfile/editPet/:id', editPet);

//display one pet
router.get('/petProfile/viewPet/:id', displayOnePet)

//delete a complaint
router.delete('/petProfile/removePet/:id', deletePet);


module.exports = router;