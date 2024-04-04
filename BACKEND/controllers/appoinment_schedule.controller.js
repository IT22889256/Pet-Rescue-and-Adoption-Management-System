const Appoinment = require("../modules/appoinment_schedule.model");

const getAppoinments = async (req, res) => {
  try {
    const appoinments = await Appoinment.find({});
    res.status(200).json(appoinments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAppoinment = async (req, res) => {
  try {
    const { id } = req.params;
    const appoinment = await Appoinment.findById(id);
    res.status(200).json(appoinment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAppoinment = async (req, res) => {
  try {
    const appoinment = await Appoinment.create(req.body);
    res.status(200).json(appoinment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAppoinment = async (req, res) => {
  try {
    const { id } = req.params;

    const appoinment = await Appoinment.findByIdAndUpdate(id, req.body);

    if (!appoinment) {
      return res.status(404).json({ message: "Adoption not found" });
    }

    const updatedAppoinment = await Appoinment.findById(id);
    res.status(200).json(updatedAppoinment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAppoinment = async (req, res) => {
  try {
    const { id } = req.params;

    const appoinment = await Appoinment.findByIdAndDelete(id);

    if (!appoinment) {
      return res.status(404).json({ message: "Adoption not found" });
    }

    res.status(200).json({ message: "Adoption deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAppoinments,
  getAppoinment,
  createAppoinment,
  updateAppoinment,
  deleteAppoinment,
};
