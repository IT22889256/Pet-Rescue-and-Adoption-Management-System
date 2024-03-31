const mongoose

 = require('mongoose');
const SpecificNeedDonationSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    specificneed_category: {
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
    }})

    const specificNeedDonation = mongoose.model('specificNeedDonation', SpecificNeedDonationSchema);
    module.exports = specificNeedDonation;