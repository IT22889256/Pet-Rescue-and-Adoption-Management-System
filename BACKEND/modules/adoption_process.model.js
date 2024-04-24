const mongoose = require("mongoose");

const AdoptionProcessSchema = mongoose.Schema(
  {
    adopter_nic: {
      type: String,
      required: true,
    },
    adopter_name: {
      type: String,
      required: true,
    },
    adopter_phone: {
      type: String,
      required: true,
    },
    adopter_email: {
      type: String,
      required: true,
    },
    adopter_pettype: {
      type: String,
      required: true,
    },
    adopter_petname: {
      type: String,
      required: true,
    },
    adopter_message: {
      type: String,
      required: true,
    },
    adopter_status: {
       type: String,
       //enum: ["pending", "approved", "rejected"],
       //default: "pending",
       required: true,
    },

  },
  {
    timestamps: true,
  }
);

const AdoptionProcess = mongoose.model("AdoptionProcess", AdoptionProcessSchema);

module.exports = AdoptionProcess;
