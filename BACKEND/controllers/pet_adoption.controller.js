const Adoption = require("../../BACKEND/modules/pet_adoption.model");

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
    const adoption = await Adoption.create(req.body);
    res.status(200).json(adoption);
  } catch (error) {
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
