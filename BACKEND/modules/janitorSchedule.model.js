const mongoose = require("mongoose");

// Define the schema for tasks
const JanitorTaskSchema = mongoose.Schema(

  
  {

    JanitorTaskScheduleId: {
      type: String,
      required: true,
    },

    
    TaskName: {
      type: String,
      required: true,
    },

   
    Staff_Member1:{
        type: String,
        required: false,
        },

    Staff_Member2:{
        type: String,
        required: false,
        },

    Staff_Member3:{
        type: String,
        required: false,
        },

    status: {
        type: String,
        enum: ["Pending", "Ignore", "Completed"],
        default: "Pending",
},
  },
  {
    timestamps: true,
  }
);

// Create a model based on the schema
const JanitorTask = mongoose.model("JanitorTask", JanitorTaskSchema);

module.exports = JanitorTask;
