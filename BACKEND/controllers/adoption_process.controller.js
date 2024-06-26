const AdoptionProcess = require("../modules/pet_adoption.model")
const Counter = require('../modules/counter.model');

const getAdoptionProcesses = async (req, res) => {
  try {
    const adoptionProcesses = await AdoptionProcess.find({});
    res.status(200).json(adoptionProcesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdoptionProcess = async (req, res) => {
  try {
    const { id } = req.params;
    const adoptionProcess = await AdoptionProcess.findById(id);
    res.status(200).json(adoptionProcess);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAdoptionProcess = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'adoptionId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const adoptionId = 'AD' + String(counter.seq).padStart(3, '0');
    
    const adoption = await Adoption.create({ ...req.body, adoption_id: adoptionId });

    res.status(200).json(adoption);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAdoptionProcess = async (req, res) => {
  try {
    const { id } = req.params;

    const adoptionProcess = await AdoptionProcess.findByIdAndUpdate(id, req.body);

    if (!adoptionProcess) {
      return res.status(404).json({ message: "Adoption not found" });
    }

    const updatedAdoptionProcesss = await AdoptionProcess.findById(id);
    res.status(200).json(updatedAdoptionProcess);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdoptionProcess = async (req, res) => {
  try {
    const { id } = req.params;

    const adoptionProcess = await AdoptionProcess.findByIdAndDelete(id);

    if (!adoptionProcess) {
      return res.status(404).json({ message: "Adoption not found" });
    }

    res.status(200).json({ message: "Adoption deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdoptionProcesses,
  getAdoptionProcess,
  createAdoptionProcess,
  updateAdoptionProcess,
  deleteAdoptionProcess,
};
