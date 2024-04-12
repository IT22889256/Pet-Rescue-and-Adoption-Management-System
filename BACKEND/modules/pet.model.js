const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    request_id: {
        type: String,
        required: true
    },
    task_id:{
        type: String,
        required: true
    },
    pet_name:{
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
    pet_gender:{
        type: String,
        required: true
    },
    pet_age:{
        type: String,
        required: true
    },
    pet_appearance:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
<<<<<<< HEAD
    pet_image:{


=======
    imgUrl:{
>>>>>>> 0607282a845092dda93ebc796fc6b007f1c8a745
        type: String,

    },
})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;