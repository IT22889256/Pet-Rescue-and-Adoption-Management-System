// models/Card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{16}$/.test(v);
      },
      message: props => `${props.value} is not a valid card number!`
    }
  },
  expirationDate: {
    type: Date,
    required: true,
    validate: {
      validator: function(v) {
        return v > new Date(); // Check if expiration date is in the future
      },
      message: props => `Card has expired!`
    }
  },
  cvv: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{3}$/.test(v);
      },
      message: props => `${props.value} is not a valid CVV!`
    }
  },
  cardholderName: {
    type: String,
    required: true
  }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;

