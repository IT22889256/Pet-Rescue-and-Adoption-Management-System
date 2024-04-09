const asyncHandler = require("express-async-handler");
const Adopter = require("../modules/adopter.model");
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
    password,
    role,
    photo,
    phone,
    bio,
    location,
    nic,
    drivngLicense,
    image,
    petOwnerShip,
    reason,
    empStatus,
  } = req.body; // Make sure to include 'role' if it's being sent from the front end
  try {
    // Validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in the name and email");
    }
    // Check if adopter email already exists
    const adopterRequestExists = await AdopterRequest.findOne({ email });
    if (adopterRequestExists) {
      res.status(400);
      throw new Error("You are already made an adopter request!");
    }

    // Create new adopter
    const adopterRequest = await AdopterRequest.create({
      name,
      email,
      password,
      role,
      photo,
      phone,
      bio,
      location,
      nic,
      drivngLicense,
      image,
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
        drivngLicense,
        image,
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
        drivngLicense,
        image,
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
      drivngLicense,
      image,
      petOwnerShip,
      reason,
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
      drivngLicense,
      image,
      petOwnerShip,
      reason,
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

//Accept Adopter Request
const acceptAdopterRequest = asyncHandler(async (req, res, next) => {
  console.log("1234 : ", req.body);
  const {
    name,
    email,
    password,
    role,
    photo,
    phone,
    bio,
    location,
    nic,
    drivngLicense,
    image,
    petOwnerShip,
    reason,
    empStatus,
  } = req.body; // Make sure to include 'role' if it's being sent from the front end
  try {
    const adopter = await Adopter.create({
      name,
      email,
      password,
      role: "adopter", // Assuming you want to hardcode role here
      photo,
      phone,
      bio,
      location,
      nic,
      drivngLicense,
      image,
      petOwnerShip,
      reason,
      empStatus,
    });

    if (adopter) {
      const {
        _id,
        name: adopterName, // Renamed to avoid conflict
        email,
        photo,
        phone,
        bio,
        location,
        nic,
        drivngLicense,
        image,
        petOwnerShip,
        reason,
        empStatus,
      } = adopter;
      res.status(201).json({
        _id,
        name: adopterName, // Used renamed variable
        email,
        role,
        photo,
        phone,
        bio,
        location,
        nic,
        drivngLicense,
        image,
        petOwnerShip,
        reason,
        empStatus,
      });

      try {
        const user = await User.findOneAndUpdate(
          { email },
          { role: "adopter" }
        );
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const updatedUser = await User.findOne({ email });

        //delete adopter request
        const adopterRequest = await AdopterRequest.findOneAndDelete({ email });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error updating user role", error: error.message });
      }
    } else {
      res.status(400).json({ message: "Invalid adopter data" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = {
  createAdopterRequest,
  getAdopterRequests,
  getOneAdopterRequest,
  updateAdopterRequest,
  deleteAopterRequest,
  acceptAdopterRequest,
};
