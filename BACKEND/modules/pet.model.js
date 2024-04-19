const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    rescue_req_id: {
        type: String,
        required: true
    },
    rescue_task_id:{
        type: String,
        required: true
    },
    pet_id:{
        type:String,
        unique:true
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
    imgUrl:{
        type: String,
        required: true
    },
})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;

