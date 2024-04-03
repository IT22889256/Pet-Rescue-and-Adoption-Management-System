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

    month: {
      type: Date,
     // required: [true, "Please enter month"],
  },

  },
  {
    timestamps: true,
  }
);

const Salary = mongoose.model("Salary", SalarySchema);

module.exports = Salary;
