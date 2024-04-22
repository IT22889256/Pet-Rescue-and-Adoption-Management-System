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

    date:{
        type: Date,
        required: true
    },

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

const RescueRequest = mongoose.model("RescueRequest", RescueRequestSchema);

module.exports = RescueRequest;