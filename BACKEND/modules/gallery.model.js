const mongoose = require("mongoose");

const GallerySchema = mongoose.Schema(
  {
    image_id: {
      type: String,
      required: true 
      //required: [true, "Please enter name"],
    },

    pet_image:{
      type: String,
      required: true 
    },

    pet_name:{
      type: String,
      required: true 
    }
  },
  
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
