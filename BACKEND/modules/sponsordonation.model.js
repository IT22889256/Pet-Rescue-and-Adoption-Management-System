const mongoose = require('mongoose');

const SponsordonationSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    pet_id:{
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    donation_date: {
        type: String,
        required: true
    },
    donation_status: {
        type: String,
        required: true
    },
    payment_status: {
        type: String,
        required: true
    },
    transaction_id: {
        type: String,
        required: true
    }
})