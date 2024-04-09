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


const request = mongoose.model("request", requestSchema);

module.exports = request;