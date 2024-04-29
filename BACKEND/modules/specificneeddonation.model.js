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
    snid:{
        type: String,
    },
    amount: {
        type: Number,
        required: true
    },
 
   
},
    { timestamps: true}
    )

    const specificNeedDonation = mongoose.model('specificNeedDonation', SpecificNeedDonationSchema);
    module.exports = specificNeedDonation;