const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adopterRequestsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
      //   maxLength: [23, "Password must not be more than 23 characters"],
    },
    // In your user model definition, add a role field
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"], // This restricts the values to either 'admin' or 'user'
      default: "user", // Default to 'user' if not specified
    },
    roletype: {
      type: String,
      enum: ["user", "userManager", "petManager"],
      default: "user", // Default to 'user' if not specified
    },

    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      maxLength: [250, "Bio must not be more than 250 characters"],
      default: "",
    },
    location: {
      type: String,
    },
    nic: {
      type: String,
      unique: true,
      trim: true,
    },
    drivngLicense: {
      type: String,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
    },
    petOwnerShip: {
      type: String,
    },
    reason: {
      type: String,
    },
    empStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AdopterRequest = mongoose.model("AdopterRequest", adopterRequestsSchema);
module.exports = AdopterRequest;
