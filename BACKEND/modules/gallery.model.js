const mongoose = require("mongoose");

const GallerySchema = mongoose.Schema(
  {
    imageId: {
      type: String,
      required: false 
      //required: [true, "Please enter name"],
    },

    pet_image:{
      type: String,
      required: true 
    },

    pet_name:{
      type: String,
      required: true 
    },
    about:{
      type: String,
      required: true 
    },

    date:{
      type: Date,
      
  }
  },
  
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
