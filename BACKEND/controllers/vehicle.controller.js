const Vehicle = require('../modules/vehicle.model');
const Counter = require('../modules/counter.model');

const getVehicles = async (req, res) => {

    try {
        const vehicles = await Vehicle.find({});
        res.status(200).json(vehicles);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await Vehicle.findById(id);
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createVehicle = async (req, res) => {
    try {
        
        const counter = await Counter.findByIdAndUpdate(
            { _id: 'vehID' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
          );
        
          const vehID = 'VEH' + String(counter.seq).padStart(3, '0');
        
          
          const vehicle = await Vehicle.create({ ...req.body, Vehicle_ID: vehID });
    
      
        res.status(200).json(vehicle);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateVehicle = async (req, res) => {

    try {

        const { id } = req.params;

        const vehicle = await Vehicle.findByIdAndUpdate(id, req.body);

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" })
        }
        const updatedVehicle = await Vehicle.findById(id);
        res.status(200).json(updatedVehicle);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};


const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;

        const vehicle = await Vehicle.findByIdAndDelete(id);

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        res.status(200).json({ message: "Vehicle deleted Successfull" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }};

module.exports = { 
    getVehicles,
    getVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
};


    