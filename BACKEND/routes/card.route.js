const router = require('express').Router();
const {displayCards, addCard, editCard, displayOneCard, deleteCard}= require('../controllers/card.controller');

//display all cards
router.get('/display', displayCards);

// create a card
router.post('/add' , addCard);

// update a card
router.put('/update/:id', editCard);

//delete a card
router.delete('/delete/:id', deleteCard);

//display one card
router.get('/display/:id', displayOneCard);

module.exports = router;
