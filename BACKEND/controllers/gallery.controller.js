const Gallery = require("../modules/gallery.model")

const getImages = async (req, res) => {
  try {
    const images = await Gallery.find({});
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Gallery.findById(id);
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createImage = async (req, res) => {
  try {
    const image = await Gallery.create(req.body);
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateImage= async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Gallery.findByIdAndUpdate(id, req.body);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    const updateImage = await Gallery.findById(id);
    res.status(200).json(updateImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Gallery.findByIdAndDelete(id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
};
