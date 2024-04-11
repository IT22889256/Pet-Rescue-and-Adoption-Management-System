const mongoose = require("mongoose");

const SuppliersSchema = mongoose.Schema(
  {
 
    // supplier_id:{
    //   type:String,
    //   // required:true,

    // },
    suppliers_name: {
      type: String,
      // required: true,
     
  },
  suppliers_address: {
      type: String,
      
    },

    suppliers_email:{
      type:String,
    },
  
    suppliers_age:{
      type: String
      
  },
  suppliers_phonenumber:{
    type:String
  },
  suppliers_image:{
    type:String
  }


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Supplier = mongoose.model("supplier", SupplierSchema);

module.exports = Supplier;