// models/Card.js
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },

  cardNumber: {
    type: String,
    required: true,
  },
  expirationYear: {
    type: String,
    required: true,
  },
  expirationMonth: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  cardholderName: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
