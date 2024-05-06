const Supply = require("../modules/pet_supply.model");
const Counter = require('../modules/counter.model');
const getSupplies = async (req, res) => {
  try {
    const supplies = await Supply.find({});
    res.status(200).json(supplies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSupply = async (req, res) => {
  try {
    const { id } = req.params;
    const supply = await Supply.findById(id);
    res.status(200).json(supply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSupply = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'supplyId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const supplyId = 'SUP' + String(counter.seq).padStart(3, '0');
    
    const supply = await Supply.create({ ...req.body, supply_id: supplyId });

    res.status(200).json(supply);
  }
  // try {
  //     const counter = await Counter.findByIdAndUpdate(
  //       { _id: 'SupplyId' },
  //       { $inc: { seq: 1 } },
  //       { new: true, upsert: true }
  //     );
    
  //     const SupplyId = 'Supply' + String(counter.seq).padStart(3, '0');
  //     // Create new employee using employeeId and request body
      
  //     const Supply = await Supply.create({ ...req.body, supply_id: SupplyId });

  //     res.status(200).json(Supply);
  //   }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSupply = async (req, res) => {
  try {
    const { id } = req.params;

    const supply = await Supply.findByIdAndUpdate(id, req.body);

    if (!supply) { 
      return res.status(404).json({ message: "Supply not found" });
    }

    const updatedSupply = await Supply.findById(id);
    res.status(200).json(updatedSupply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSupply = async (req, res) => {
  try {
    const { id } = req.params;

    const supply = await Supply.findByIdAndDelete(id);

    if (!supply) {
      return res.status(404).json({ message: "Supply not found" });
    }

    res.status(200).json({ message: "Supply deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSupplies,
  getSupply,
  createSupply,
  updateSupply,
  deleteSupply,
};
