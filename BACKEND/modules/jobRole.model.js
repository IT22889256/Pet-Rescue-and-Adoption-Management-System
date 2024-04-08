const mongoose = require("mongoose");

const JobRolesSchema = mongoose.Schema(
  {
    jobId: {
      type: String,
      //required: [true, "Please enter Job ID"],
     // unique: true,
     default: 'JR' + Math.random().toString().substring(2, 8)
    },

    jobRole: {
        type: String,
        //required: [true, "Please enter job-role"],
      },

    otRates: {
        type: Number,
        //required: [true, "Please enter OT Rates"],
      },

    basicSalary: {
        type: Number,
        //required: [true, "Please enter Basic Salary"],
     },
  },
  {
    timestamps: true,
  }
);

const JobRoles = mongoose.model("JobRole", JobRolesSchema);

module.exports = JobRoles;
