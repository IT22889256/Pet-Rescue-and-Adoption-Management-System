const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(

    {
        Vehicle_ID: {
            type: String,
        },
        Vehicle_Serial_No: {
            type: String,
            required: [true],
        },

        Vehicle_Model: {
            type: String,
            required: [true],
        },

        Plate_Number: {
            type: String,
            required: [true],
        },

        Year_Manufactured: {
            type: String,
            required: [true],
        },
        vehicle_status: {
            type: String,
            required: [true],
        },

        Engine_Number: {
            type: String,
            required: [true],
        },
        
        Chassis_Number: {
            type: String,
            required: [true],
        },

        Vehicle_Type: {
            type: String,
            required: [true],
        },
        Vehicle_image:{
            type: String,
            required: [true],
        }

    
    },
        {
            timestamps: true
        }

    );

    const Vehicle = mongoose.model("Vehicle", VehicleSchema);
    module.exports = Vehicle;