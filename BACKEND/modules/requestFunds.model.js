const mongoose = require("mongoose");

const requestFundsSchema = mongoose.Schema(
  {
 
    request_id:{
     type:String,
    required:false,

    },

    request_no: {
      type: String,
      required: false,
     
  },

    amount: {
    type: Number,
   required: true,
   
},
  
request_from: {
    type: String,
    enum: ['employee manager', 'inventory manager'], 
    default: 'employee manager' 

  },


  request_to: {
    type: String,
    enum: ['donation manager', 'supplier'], 
    default: 'donation manager' 

  },

  

    request_date:{
        type: Date, // Change type to Date
        default: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), // Set default value to current date
    },
  
  
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'], 
      default: 'pending' 

    }

    
  },
  {
    timestamps: true,
  }
  );


const requestfunds = mongoose.model("requestFunds", requestFundsSchema);

module.exports = requestfunds;