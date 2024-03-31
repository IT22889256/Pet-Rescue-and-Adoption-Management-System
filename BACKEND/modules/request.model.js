const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema(
  {
 
    // supplier_id:{
    //   type:String,
    //   // required:true,

    // },
    request_no: {
      type: String,
      // required: true,
     
  },
  request_to: {
      type: String,
      
    },

    request_date:{
      type:String,
    }
  
  


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Supplier = mongoose.model("supplier", SupplierSchema);

module.exports = Supplier;