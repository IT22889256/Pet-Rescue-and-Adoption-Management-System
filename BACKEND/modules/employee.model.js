const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    eid: {
      type: String,
    //  required: [true, "Please enter Employee ID"],
     // unique: true,
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
      enum: ['doctor', 'cleaner', 'manager','helper','supportive staff member'], // Enum field with values 'single', 'married', 'divorced'
       default: 'doctor'
      //required: [true, "Please enter job-role"],
    },

    recruitedDate: {
      type: Date,
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
       enum: ['single', 'married', 'divorced','widowed'], // Enum field with values 'single', 'married', 'divorced'
       default: 'single' // Default value set to 'single'
    }
    
  },
  {
    timestamps: true,
  }
);



const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
