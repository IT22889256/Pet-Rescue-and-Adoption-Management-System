const mongoose = require('mongoose');

const SponsorDonationSchema = mongoose.Schema({

    user_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    pet_id:{
      type: String, 
      required: true
    },
    spid:{
        type: String,

    }
},
    { timestamps: true}
);

const SponserDonation = mongoose.model('SponserDonation', SponsorDonationSchema);

module.exports = SponserDonation;