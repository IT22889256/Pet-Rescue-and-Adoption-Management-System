const mongoose = require("mongoose");

const AttendanceSchema = mongoose.Schema(
  {
    eid: {
      type: String,
      required: false,
      //unique: true,
    },

    firstName: {
      type: String,
      required: false,
    },

    jobRole: {
      type: String,
      required: false,
    },
    
    date: {
      type: Date,
      required: false,
    },

    status: {
      type: String,
      enum: ['available', 'unavailable'], 
      default: 'available'
    },

  },
  {
    timestamps: true,
  }
);



const Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = Attendance;
