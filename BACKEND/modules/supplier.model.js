const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema(
  {
 
    // supplier_id:{
    //   type:String,
    //   // required:true,

    // },
    supplier_name: {
      type: String,
      // required: true,
     
  },
  supplier_address: {
      type: String,
      
    },

    supplier_email:{
      type:String,
    },
  
    supplier_age:{
      type: String
      
  },
  supplier_phonenumber:{
    type:String
  },
  supplier_image:{
    type:String
  }


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Supplier = mongoose.model("supplier", SupplierSchema);

module.exports = Supplier;