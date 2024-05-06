const SponserPet = require("../modules/sponserpet.model");

//display all sponsered pets
const displaySponseredPets = async (req, res) => {
  try {
    const sponseredPets = await SponserPet.find({});
    res.status(200).json(sponseredPets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create sponsered pet
const addSponseredPet = async (req, res) => {
  try {
    SponserPet.create(req.body)
      .then((sponseredPet) => res.json(sponseredPet))
      .catch((err) => res.json(err));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Edit a sponsered pet
const editSponseredPet = async (req, res) => {
  try {
    const { id } = req.params;
    const sponseredPet = await SponserPet.findByIdAndUpdate(id, req.body);
    if (!sponseredPet) {
      return res.status(404).json({ message: "Sponsered Pet not found" });
    }
    const updateSponseredPet = await SponserPet.findById(id);
    res.status(200).json(updateSponseredPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//display One Sponsered Pet
const displayOneSponseredPet = async (req, res) => {
  try {
    const { id } = req.params;
    const sponseredPet = await SponserPet.findById(id);
    if (!sponseredPet) {
      return res.status(404).json({ message: "Sponsered Pet not found" });
    }
    res.status(200).json(sponseredPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a sponsered pet
const deleteSponseredPet = async (req, res) => {
  try {
    const { id } = req.params;
    const sponseredPet = await SponserPet.findByIdAndDelete(id);
    if (!sponseredPet) {
      return res.status(404).json({ message: "Sponsered Pet not found" });
    }
    res.status(200).json({ message: "Sponsered Pet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displaySponseredPets,
  addSponseredPet,
  editSponseredPet,
  displayOneSponseredPet,
  deleteSponseredPet,
};
