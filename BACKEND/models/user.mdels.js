const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter an password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
