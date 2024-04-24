const mongoose = require("mongoose");

const messagesSchema = mongoose.Schema(
  {
    supply_item: {
      type: String,
      required: false,
    },
    supply_pettype: {
      type: String,
      required: false,
    },
    supply_brand: {
      type: String,
      required: false,
    },
    supply_message: {
        type: String,
        required: false,
    }
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

const messages = mongoose.model("messages", messagesSchema);

module.exports = messages;
