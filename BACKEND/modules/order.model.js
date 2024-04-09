const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
 
    
    

    order_id: {
      type: String,
      // required: true,
     
  },

  
  item_id: {
      type: String,
      
    },

    order_quantity:{
      type:String,
    },
    order_status:{
      type:String
    },
  
    item_image:{
      type: String
      
  },
  date:{
    type:String
  }


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;