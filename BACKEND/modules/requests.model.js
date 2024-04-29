const mongoose = require('mongoose');

const requestsSchema = mongoose.Schema({
    requests_id:{
        type: String,
        required: true
    },
    // user_name:{
    //     type: String,
    //     required: true
    // },
    // user_contact:{
    //     type: String,
    //     required: true
    // },
    // user_email:{
    //     type: String,
    //     required: true
    // },
    requests_from:{
        type: String,
        required: true
    },
    requests_description:{
        type: String,
        required: true
    },
    requests_date:{
        type: String,
        required: true
    },
   
    requests_status:{
        type: String,
        required: true
    },
   
})

const RescueRequest = mongoose.model("RescueRequest", RescueRequestSchema);

module.exports = RescueRequest;