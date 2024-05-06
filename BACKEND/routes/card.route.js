const router = require("express").Router();
const {
  displayCards,
  addCard,
  editCard,
  displayOneCard,
  deleteCard,
  getCardDetails,
} = require("../controllers/card.controller");

//display all cards
router.get("/display", displayCards);

// create a card
router.post("/add", addCard);

// update a card
router.put("/update/:id", editCard);

//delete a card
router.delete("/delete/:id", deleteCard);

//display one card
router.get("/display/:id", displayOneCard);

//get card details
router.get("/getCardDetails/:id", getCardDetails);
module.exports = router;
