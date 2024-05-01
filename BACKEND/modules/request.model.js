const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
 
    

    request_no: {
      type: String,
      required: true,
     
  },



  request_to: {
    type: String,
    // enum: ['donation manager', 'supplier'], 
    // default: 'donation manager' 
    required: true,

  },

    request_date:{
      type:String,
      required: true,
    },
  
  
    // status: {
    //   type: String,
    //   enum: ['pending', 'accepted', 'rejected'], 
    //   default: 'pending' 

    // }

    
  // },
  // {
  //   timestamps: true,
  // }
  });


const request = mongoose.model("request", requestSchema);

module.exports = request;