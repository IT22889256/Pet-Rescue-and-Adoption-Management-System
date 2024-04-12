const Supply = require("../modules/messagesmodel");
// const { getmessages, getmessages, createmessages, updatemessages, deletemessages } =

const getmessage = async (req, res) => {
  try {
    const supplies = await Supply.find({});
    res.status(200).json(supplies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getmessages = async (req, res) => {
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
    const supply = await Supply.create(req.body);
    res.status(200).json(supply);
  } catch (error) {
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
