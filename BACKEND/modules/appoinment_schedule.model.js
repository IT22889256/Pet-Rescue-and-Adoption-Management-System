const mongoose = require("mongoose");

const AppoinmentSchema = mongoose.Schema(
  {
    // appoinment_date: {
    //   type: String,
    //   required: false,
    // },
    appoinment_time: {
      type: String,
      required: true,
    },
    appoinment_doctor: {
      type: String,
      required: true,
    },
    // status: {
    //   type: String,
    //   enum: ["pending", "approved", "rejected"],
    //   default: "pending",
    // },

  },
  {
    timestamps: true,
  }
);

const Appoinment = mongoose.model("Appoinment", AppoinmentSchema);

module.exports = Appoinment;
