const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    eid: {
      type: String,
      //  required: [true, "Please enter Employee ID"],
      unique: true,
    },

    nic: {
      type: String,
      // required: [true, "Please enter NIC"],
      // unique: true,
    },

    firstName: {
      type: String,
      // required: [true, "Please enter first name"],
    },

    middleName: {
      type: String,
      required: false,
    },

    lastName: {
      type: String,
      // required: [true, "Please enter last name"],
    },

    jobRole: {
      type: String,
      enum: [
        "doctor",
        "cleaner",
        "driver",
        "manager",
        "helper",
        "supportive staff member",
      ],
      default: "doctor",
      //required: [true, "Please enter job-role"],
    },

    recruitedDate: {
      type: Date,
      default: Date.now,
      // required: [true, "Please enter recruitedDate"],
    },

    birthday: {
      type: Date,
      // required: false,
    },

    address: {
      type: String,
      // required: [true, "Please enter address"],
    },

    city: {
      type: String,
      // required: [true, "Please enter city"],
    },

    postalCode: {
      type: String,
      // required: [true, "Please enter postal code"],
    },

    phoneNumber: {
      type: String,
      //required: [true, "Please enter phone number"],
    },

    email: {
      type: String,
      // required: [true, "Please enter email"],
    },

    maritalStatus: {
      type: String,
      enum: ["single", "married", "divorced", "widowed"], // Enum field with values 'single', 'married', 'divorced'
      default: "single", // Default value set to 'single'
    },

    availability: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },

    status: {
      type: String,
      enum: ["approved", "denied", "pending"],
      default: "pending",
    },

    employeeimgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
