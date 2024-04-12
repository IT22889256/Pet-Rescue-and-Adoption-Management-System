const mongoose = require('mongoose');

const RescueRequestSchema = mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    pet_type:{
        type: String,
        required: true
    },
    health_status:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 0607282a845092dda93ebc796fc6b007f1c8a745
    date:{
        type: Date,
        required: true
    },
<<<<<<< HEAD

=======
>>>>>>> developer
>>>>>>> 0607282a845092dda93ebc796fc6b007f1c8a745
    rescue_request_status:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },

    },

    {
        timestamps:true
    }
    
    )

<<<<<<< HEAD

=======
>>>>>>> 0607282a845092dda93ebc796fc6b007f1c8a745

const RescueRequest = mongoose.model("RescueRequest", RescueRequestSchema);

module.exports = RescueRequest;