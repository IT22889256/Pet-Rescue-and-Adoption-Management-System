const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
 
    request_id:{
     type:String,
     required:true,
    },

    request_no: {
      type: String,
      // required: true,
     
  },

  amount: {
    type: Number,
    required: true,
   
},
  

  request_to: {
    type: String,
    enum: ['donation manager', 'supplier'], 
    default: 'donation manager' 

  },

    request_date:{
      type:String,
    },
  
  
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'], 
      default: 'pending' 

    }

    
  // },
  // {
  //   timestamps: true,
  // }
  });


const request = mongoose.model("request", requestSchema);

module.exports = request;