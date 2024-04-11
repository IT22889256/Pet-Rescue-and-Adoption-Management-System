const mongoose = require('mongoose');

const RescueRequestSchema = mongoose.Schema({
    user_id:{
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

>>>>>>> d39252ca9a0aa277b9aca8c1b3ce0db4a59e9d46
    date:{
        type: Date,
        required: true
    },
<<<<<<< HEAD
=======

>>>>>>> d39252ca9a0aa277b9aca8c1b3ce0db4a59e9d46
    rescue_request_status:{
        type: String,
        required: true
    },
    pet_image:{
        type: String,
    },
<<<<<<< HEAD
})
=======

    },

    {
        timestamps:true
    }
    
    )

>>>>>>> d39252ca9a0aa277b9aca8c1b3ce0db4a59e9d46

const RescueRequest = mongoose.model("RescueRequest", RescueRequestSchema);

module.exports = RescueRequest;