const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
      enum: ["admin", "user", "adopter", "employee"],
      default: "user",
    },

    eid: {
      type: String,
      default: "Null",
    },
    status: {
      type: String,
      enum: ["loged in", "loged out"],
    },
    time: {
      type: String,
      default: "Null",
    },
  },
  {
    timestamps: true,
  }
);

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
