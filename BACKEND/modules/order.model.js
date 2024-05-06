const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
 
    
  //   order_id: {
  //     type: String,
  //      required: true
     
  // },

  oid:{
    type:String,
  },

 

    order_quantity:{
      type:String,
      required: true
    },
    order_category:{
      type:String,
      required: true

    },

    order_status:{
      type:String,
      required: true,
      default:"pending"
    },
  
  //   item_image:{
  //     type: String,
  //     required: true
      
  // },
  date:{
    type:String,
    required: true
  }


    
  // },
  // {
  //   timestamps: true,
  // }
  });


const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;