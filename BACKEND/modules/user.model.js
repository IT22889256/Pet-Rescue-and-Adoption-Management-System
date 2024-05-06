const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
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
      minLength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user", "adopter", "employee"],
      default: "user",
    },
    roletype: {
      type: String,
      enum: [
        "user",
        "employee",
        "doctor",
        "supplier",
        "driver",
        "userManager",
        "petManager",
        "transportManager",
        "employeeManager",
        "donationManager",
        "adoptionManager",
        "inventoryManager",
        "userAffairsManager",
      ],
      default: "user",
    },
    eid: {
      type: String,
      default: "Null",
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
    jobRole: {
      type: String,
      default: "Null",
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
    nicback: {
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

// Encrypt password before saving to DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
