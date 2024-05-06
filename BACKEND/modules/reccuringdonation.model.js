const mongoose = require('mongoose');
const RecurringDonationSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
   
    amount: {
        type: Number,
        required: true
    },
   
    // donation_status: {
    //     type: String,
    //     required: true
    // },
    donation_frequency: {
        type: String,
        enum:['monthly','once'],
        required: true
    },

    donation_start_date: {
        type: Date,
        required: function() {
            return this.donation_frequency === 'monthly'; // Start date required only for monthly donations
        }
    },
    donation_end_date: {
        type: Date,
        required: function() {
            return this.donation_frequency === 'monthly'; // End date required only for monthly donations
        }
    },

    rid:{
        type: String,
    }
    // payment_status: {
    //     type: String,
    //     required: true
    // },
    // transaction_id: {
    //     type: String,
    //     required: true
    // },
        
},
    { timestamps: true}

);

const reccuringDonation = mongoose.model('reccuringDonation', RecurringDonationSchema);

module.exports = reccuringDonation;
