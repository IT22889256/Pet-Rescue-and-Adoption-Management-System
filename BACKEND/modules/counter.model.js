const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for Counter collection
const CounterSchema = new Schema({
  _id: { type: String, required: true }, // The unique identifier for the counter
  seq: { type: Number, default: 0 } // The sequence number, initialized to 0 by default
});

// Create model from schema
const Counter = mongoose.model('Counter', CounterSchema);

module.exports = Counter;
