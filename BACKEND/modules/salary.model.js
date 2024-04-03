const mongoose = require("mongoose");

const SalarySchema = mongoose.Schema(
  {
    eid: {
      type: String,
      //required: [true, "Please enter Employee ID"],
     // unique: true,
    },

    jobId: {
      type: String,
      //required: [true, "Please enter Job ID"],
      //unique: true,
    },

    basicSalary: {
      type: Number,
     // required: [true, "Please enter Basic Salary"],
    },

    otHours: {
      type: Number,
      //required: [true, "Please enter OT Hours"],
    },

    otRates: {
      type: Number,
     // required: [true, "Please enter OT Rates"],
    },

    totalOT: {
      type: Number,
     // required: [true, "Please enter Total OT Salary"],
    },

    bonus: {
      type: Number,
      //required: [true, "Please enter Bonus"],
    },

    totalSalary: {
      type: Number,
      //required: [true, "Please enter Total Salary"],
    },

    firstName: {
      type: String,
      //required: [true, "Please enter first name"],
    },
    
    month: {
      type: Number, // Change the type to Number
      default: new Date().getMonth() + 1, // Get the current month (1-indexed)
     // required: [true, "Please enter month"],


    },

  },
  {
    timestamps: true,
  }
);

const Salary = mongoose.model("Salary", SalarySchema);

module.exports = Salary;
