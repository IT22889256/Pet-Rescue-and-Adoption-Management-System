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
 
   
},
    { timestamps: true}
    )

    const specificNeedDonation = mongoose.model('specificNeedDonation', SpecificNeedDonationSchema);
    module.exports = specificNeedDonation;