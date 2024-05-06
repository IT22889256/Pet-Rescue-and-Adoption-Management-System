const mongoose = require("mongoose");

// Define the schema for tasks
const JanitorTaskSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: [true, "Please enter a task name"],
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

    date: {
      type: Date,
      default: Date.now,
      required: [true, "Please specify a date"],
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
