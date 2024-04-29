const mongoose = require('mongoose');

const SponserPetSchema = mongoose.Schema({

  pet_id: { 
    type: String, 
    required: true },
   
    pet_name: {
        type: String,
        required: true
    },
    pet_type: {
        type: String,
        required: true
    },
    pet_description: {
        type: String,
        required: true
      },

      added_date: {
        type: String,
        required: true
      },
    sponsorship_status: {
        type: String,
        required: true
    },
       pet_image: {
        type: String,
       required: true
    },
    health_status: {
        type: String,
        required: true
    },

    
  
})
const SponserPet = mongoose.model('SponserPet', SponserPetSchema);

module.exports = SponserPet;