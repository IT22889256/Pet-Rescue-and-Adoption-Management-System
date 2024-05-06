const asyncHandler = require("express-async-handler");
const AdopterRequest = require("../modules/adopterrequests.model");
const User = require("../modules/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Token = require("../modules/token.model");
const sendEmail = require("../utils/sendEmail");
const mongoose = require("mongoose");
// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Create Adopter
const createAdopterRequest = asyncHandler(async (req, res, next) => {
  const {
    name,
    email,
    role,
    photo,
    phone,
    bio,
    location,
    nic,
    dob,
    image,
    nicback,
    petOwnerShip,
    reason,
    empStatus,
  } = req.body; // Make sure to include 'role' if it's being sent from the front end
  try {
    // Check if adopter email already exists
    const adopterRequestExists = await AdopterRequest.findOne({ email });
    if (adopterRequestExists) {
      res.status(400);
      throw new Error("You are already made an adopter request!");
    }

    // Create new adopter request
    const adopterRequest = await AdopterRequest.create({
      name,
      email,
      role,
      photo,
      phone,
      bio,
      location,
      nic,
      dob,
      image,
      nicback,
      petOwnerShip,
      reason,
      empStatus,
    });

    // Send HTTP-only cookie

    if (adopterRequest) {
      const {
        _id,
        name,
        email,
        photo,
        phone,
        bio,
        location,
        nic,
        dob,
        image,
        nicback,
        petOwnerShip,
        reason,
        empStatus,
      } = adopterRequest;
      res.status(201).json({
        _id,
        name,
        email,
        role,
        photo,
        phone,
        bio,
        location,
        nic,
        dob,
        image,
        nicback,
        petOwnerShip,
        reason,
        empStatus,
      });
    } else {
      res.status(400);
      throw new Error("Invalid adopter data");
    }
  } catch (err) {
    next(err);
  }
});

// Get all Adopter Requests
const getAdopterRequests = async (req, res) => {
  try {
    const adopterRequests = await AdopterRequest.find();
    res.status(200).json(adopterRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one Adopter Request
const getOneAdopterRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const adopterRequest = await AdopterRequest.findById(id);

  if (adopterRequest) {
    const {
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      role,
      location,
      nic,
      dob,
      image,
      nicback,
      petOwnerShip,
      reason,
      empStatus,
    } = adopterRequest;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      role,
      location,
      nic,
      dob,
      image,
      nicback,
      petOwnerShip,
      reason,
      empStatus,
    });
  } else {
    res.status(400);
    throw new Error("Adopter request Not Found");
  }
});

// Update Adopter Request
const updateAdopterRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const adopterRequest = await AdopterRequest.findByIdAndUpdate(id, req.body);
    if (!adopterRequest) {
      return res.status(404).json({ message: "Adopter Request not found" });
    }

    const updatedAdopterRequest = await AdopterRequest.findById(id);
    res.status(200).json(updatedAdopterRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete Adopter Request
const deleteAopterRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const adopterRequest = await AdopterRequest.findByIdAndDelete(id);
    if (!adopterRequest) {
      return res.status(404).json({ message: "Adopter Request not found" });
    }
    res.status(200).json({ message: "Adopter Request successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const acceptAdopterRequest = asyncHandler(async (req, res, next) => {
  console.log("1234 : ", req.params.id);
  const { id } = req.params;

  try {
    const adopterRequest = await AdopterRequest.findById(id);
    console.log("adopterRequest : ", adopterRequest);

    if (!adopterRequest) {
      return res.status(404).json({ message: "Adopter request not found!" });
    }

    const {
      email,
      location,
      nic,
      dob,
      image,
      nicback,
      phone,
      petOwnerShip,
      reason,
      empStatus,
    } = adopterRequest;

    const user = await User.findOneAndUpdate(
      { email },
      {
        role: "adopter",
        location,
        nic,
        dob,
        image,
        nicback,
        phone,
        petOwnerShip,
        reason,
        empStatus,
      }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Delete adopter request after successfully updating user role
    await AdopterRequest.findByIdAndDelete(id);

    res.status(200).json({ message: "User role updated successfully" });
  } catch (error) {
    console.error("Error updating user role:", error);
    res
      .status(500)
      .json({ message: "Error updating user role", error: error.message });
  }
});

// Get all Adopters
const getAdopters = async (req, res) => {
  try {
    const adopters = await User.find({ role: "adopter" });
    res.status(200).json(adopters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdopterRequest,
  getAdopterRequests,
  getOneAdopterRequest,
  updateAdopterRequest,
  deleteAopterRequest,
  acceptAdopterRequest,
  getAdopters,
};
