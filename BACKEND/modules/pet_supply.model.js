const mongoose = require("mongoose");

const SupplySchema = mongoose.Schema(
  {
    supply_item: {
      type: String,
      required: true,
    },
    supply_pettype: {
      type: String,
      required: true,
    },
    supply_brand: {
      type: String,
      required: true,
    },
    supply_image: {
        type: String,
        required: true,
    },
    supply_quantity: {
      type: String,
      required: true,
  },
    supply_message: {
        type: String,
        required: true,
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

const Supply = mongoose.model("Supply", SupplySchema);

module.exports = Supply;
