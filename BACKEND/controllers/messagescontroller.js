const Supply = require("../modules/messagesmodel");
// const { getmessages, getmessages, createmessages, updatemessages, deletemessages } =

const getmessage = async (req, res) => {
  try {
    const supplies = await messages.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getmessages = async (req, res) => {
  try {
    const { id } = req.params;
    const supply = await Supply.findById(id);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createmessages = async (req, res) => {
  try {
    const supply = await Supply.create(req.body);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatemessages = async (req, res) => {
  try {
    const { id } = req.params;

    const messages = await messages.findByIdAndUpdate(id, req.body);

    if (!messages) { 
      return res.status(404).json({ message: "Supply not found" });
    }

    const updatedmessages = await messages.findById(id);
    res.status(200).json(updatedmessages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletemessages = async (req, res) => {
  try {
    const { id } = req.params;

    const messages = await messages.findByIdAndDelete(id);

    if (!messages) {
      return res.status(404).json({ message: "messages not found" });
    }

    res.status(200).json({ message: "messages deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getmessage,
  getmessages ,
  createmessages,
  updatemessages,
  deletemessages,
};
