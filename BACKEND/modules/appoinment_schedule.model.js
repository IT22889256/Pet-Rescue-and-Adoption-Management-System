const mongoose = require("mongoose");

const AppoinmentSchema = mongoose.Schema(
  {
    // appoinment_date: {
    //   type: String,
    //   required: false,
    // },
    appoinment_time: {
      type: String,
      required: false,
    },
    appoinment_doctor: {
      type: String,
      required: false,
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
