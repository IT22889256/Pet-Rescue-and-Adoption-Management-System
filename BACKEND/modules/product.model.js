const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
 
    item_name:{
      type:String,
      // required:true,

    },

    item_category: {
      type: String,
      // required: true,
     
  },

  
  item_quantity: {
      type: String,
      
    },

    item_price:{
      type:String,
    },
  
    item_image:{
      type: String
      
  },
  item_date:{
    type:String
  }


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;