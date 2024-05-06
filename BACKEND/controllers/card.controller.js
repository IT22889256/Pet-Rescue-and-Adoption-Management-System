const card = require("../modules/card.model");
const { use } = require("../routes/card.route");

//display all cards
const displayCards = async (req, res) => {
  try {
    const cards = await card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create card
const addCard = async (req, res) => {
  console.log(req.body);
  try {
    card
      .create(req.body)
      .then((card) => res.json(card))
      .catch((err) => res.json(err));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Edit a card
const editCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await card.findByIdAndUpdate(id, req.body);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    const updateCard = await card.findById(id);
    res.status(200).json(updateCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//display One Card
const displayOneCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await card.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a card
const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await card.findByIdAndDelete(id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get card details of one user by user id
const getCardDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);

    const Card = await card.findOne({ user_id: id });

    console.log(Card);
    if (!Card) {
      return res.status(404).json({ message: "Card not found" });
    }

    // Send card data to the frontend only if database has data related to the provided user_id
    if (Card) {
      res.status(200).json(Card);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displayCards,
  addCard,
  editCard,
  displayOneCard,
  deleteCard,
  getCardDetails,
};
