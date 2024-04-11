const mongoose = require("mongoose");

const employeeLeaveCountSchema = mongoose.Schema(
  {
    eid: {
      type: String,
     // required: [true, "Please enter Employee ID"],
     // unique: true,
    },

    medical: {
      type: Number,
      default: 4,
     // required: [true, "Please enter the Date"],
    },

    casual: {
      type: Number,
      default: 3,
     // required: [true, "Please enter the Date"],
    },

    emergency: {
      type: Number,
      default: 2,
     // required: [true, "Please enter the Date"],
    },
   
    email: {
      type: String,
      required: false,
    },
    

  },
  {
    timestamps: true,
  }
);



const EmployeeLeaveCount = mongoose.model("EmployeeLeaveCount", employeeLeaveCountSchema);

module.exports = EmployeeLeaveCount;
