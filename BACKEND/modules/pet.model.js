const mongoose = require('mongoose');

// const PetSchema = mongoose.Schema(
//     {
//         request_id: String,
//         required: true
//     },
//     {
//         request_id: String,
//         required: true
//     },
//     {
//         pet_name: String,
//         required: true
//     },
//     {
//         pet_type: String,
//         required: true
//     },
//     {
//         pet_appearance: String,
//         required: true
//     },
//     {
//         gender: String,
//         required: true
//     },
//     {
//         health_status: String,
//         required: true
//     },
//     {
//         street_address: String,
//         required: true
//     },
//     {
//         city: String,
//         required: true
//     },
//     {
//         region: String,
//         required: true
//     },
//     {
//         postal_code: String,
//         required: true
//     },
//     {
//         file_upload: String,
//         required: true
//     },

//     )


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
    pet_image:{
        type: String,
        required: true
    },
})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;