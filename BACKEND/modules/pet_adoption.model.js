const mongoose = require("mongoose");

const AdoptionSchema = mongoose.Schema(
  {
    adopter_nic: {
      type: String,
      required: false,
    },
    adopter_name: {
      type: String,
      required: false,
    },
    adopter_phone: {
      type: String,
      required: false,
    },
    adopter_email: {
      type: String,
      required: false,
    },
    adopter_pettype: {
      type: String,
      required: false,
    },
    adopter_petname: {
      type: String,
      required: false,
    },
    adopter_message: {
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

const Adoption = mongoose.model("Adoption", AdoptionSchema);

module.exports = Adoption;
