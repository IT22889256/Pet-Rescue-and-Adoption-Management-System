const Adoption = require("../../BACKEND/modules/pet_adoption.model");
const Counter = require('../modules/counter.model');

const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find({});
    res.status(200).json(adoptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdoption = async (req, res) => {
  try {
    const { id } = req.params;
    const adoption = await Adoption.findById(id);
    res.status(200).json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAdoption = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'adoptionId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const adoptionId = 'AD' + String(counter.seq).padStart(3, '0');
    
    const adoption = await Adoption.create({ ...req.body, adoption_id: adoptionId });

    res.status(200).json(adoption);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAdoption = async (req, res) => {
  try {
    const { id } = req.params;

    const adoption = await Adoption.findByIdAndUpdate(id, req.body);

    if (!adoption) {
      return res.status(404).json({ message: "Adoption not found" });
    }

    const updatedAdoption = await Adoption.findById(id);
    res.status(200).json(updatedAdoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdoption = async (req, res) => {
  try {
    const { id } = req.params;

    const adoption = await Adoption.findByIdAndDelete(id);

    if (!adoption) {
      return res.status(404).json({ message: "Adoption not found" });
    }

    res.status(200).json({ message: "Adoption deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdoptions,
  getAdoption,
  createAdoption,
  updateAdoption,
  deleteAdoption,
};
