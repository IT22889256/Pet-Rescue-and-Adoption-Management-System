const mongoose = require("mongoose");

const DeletedEmployeeSchema = mongoose.Schema(
    {
        eid: {
          type: String,
          //required: [true, "Please enter Employee ID"],
          //unique: true,
        },
    
        nic: {
          type: String,
         // required: false,
          //unique: true,
        },
    
        firstName: {
          type: String,
          required: false,
        },
    
        middleName: {
          type: String,
          required: false,
        },
    
        lastName: {
          type: String,
          required: false,
        },
    
        jobRole: {
          type: String,
          required: false,
        },
    
        recruitedDate: {
          type: Date,
          required: false,
        },
        birthday: {
          type: Date,
          required: false,
        },
    
        address: {
          type: String,
          required: false,
        },
    
        city: {
          type: String,
          required: false,
        },
    
        postalCode: {
          type: String,
          required: false,
        },
    
        phoneNumber: {
          type: String,
          required: false,
        },
    
        email: {
          type: String,
          required: false,
        },
    
        maritalStatus: {
          type: String,
          required: false,
        },

       ReasonForDelete: {
          type: String,
          required: false,
      },
  },
  {
    timestamps: true,
  }
);
// Define Mongoose model for deleted employees
const DeletedEmployee = mongoose.model('DeletedEmployee', DeletedEmployeeSchema);

module.exports = DeletedEmployee;

