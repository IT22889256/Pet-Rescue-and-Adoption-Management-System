const mongoose = require("mongoose");

const GallerySchema = mongoose.Schema(
  {
    image_id: {
      type: String,
      //required: [true, "Please enter name"],
    },

    pet_image:{
      type: String,
    },

    pet_name:{
      type: String,
    }
  },
  
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
