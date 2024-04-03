const mongoose = require('mongoose');
const DonationSchema = mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    donation_type:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    pet_id:{
      type: String,
    },
    specificneed_category:{
        type: String,
        enum:['food','vet care','pet toys']
    },
    // donation_frequency:{
    //     type: String,
    //     enum:['monthly','once'],
    // },
    }
    ,
    { timestamps: true}

   
)
const Donation = mongoose.model('Donation', DonationSchema);
module.exports = Donation;