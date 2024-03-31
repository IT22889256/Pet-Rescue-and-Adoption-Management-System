const mongoose = require
('mongoose');
const RecurringDonationSchema = mongoose.Schema({
    user_id: {
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
    donation_frequency: {
        type: String,
        enum:['monthly','once'],
        required: true
    },

    donation_start_date: {
        type: String,
        required: true
    },
    donation_end_date: {
        type: String,
        required: true
    },
    payment_status: {
        type: String,
        required: true
    },
    transaction_id: {
        type: String,
        required: true}
    })

    const reccuringDonation = mongoose.model('reccuringDonation', RecurringDonationSchema);
    
    module.exports = reccuringDonation;