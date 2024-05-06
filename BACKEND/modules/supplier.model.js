const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema(
  {
 
    sid:{
      type:String,
     
    },
    supplier_name: {
      type: String,
       required: true,
     
  },
  supplier_address: {
      type: String,
      required: true,
    },

    supplier_email:{
      type:String,
      required: true,
    },
  
    supplier_age:{
      type: String,
      required: true,
  },
  supplier_phonenumber:{
    type:String,
    required: true,
  },
  supplier_image:{
    type:String,
    required: true,
  }


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Supplier = mongoose.model("supplier", SupplierSchema);

module.exports = Supplier;