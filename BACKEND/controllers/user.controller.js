const asyncHandler = require("express-async-handler");
const User = require("../modules/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Token = require("../modules/token.model");
const sendEmail = require("../utils/sendEmail");
const mongoose = require("mongoose");
const otpGenerator = require("otp-generator");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");
// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register User
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body; // Make sure to include 'role' if it's being sent from the front end
  try {
    // Validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in the name and email");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }
    // Check if user email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Email has already been registered");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role: role || "user", // Assign 'user' as default role if none provided
    });

    //   Generate Token
    const token = generateToken(user._id, user.role); // Include the user role here

    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",

      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    if (user) {
      const { _id, name, email, photo, phone, bio } = user;
      res.status(201).json({
        _id,
        name,
        email,
        role,
        photo,
        phone,
        bio,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }

    //res.send("Register User");
  } catch (err) {
    next(err);
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate Request
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Please add email and password" });
    return;
  }

  // Check if user exists
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    res
      .status(400)
      .json({ success: false, message: "User not found, please signup" });
    return;
  }

  // User exists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //   Generate Token
  const token = generateToken(user._id);
  console.log(token);
  if (passwordIsCorrect) {
    console.log("password is correct");
    // Send HTTP-only cookie
    console.log(token);
    res.cookie("token", token, {
      domain: "localhost",
      path: "/",

      expires: new Date(Date.now() + 1000 * 86400), // 1 day
    });
  }
  // Modify the part in your loginUser function that sends the response
  if (user && passwordIsCorrect) {
    const {
      _id,
      name,
      email,
      role,
      photo,
      roletype,
      phone,
      eid,
      bio,
      jobRole,
    } = user; // Include role here

    res.status(200).json({
      _id,
      name,
      email,
      phone,
      role, // Send role to the frontend
      roletype, // Send roletype to the frontend
      photo,
      eid,
      jobRole,
      bio,
      token,
    });
  } else {
    res.status(400).json({ message: "Invalid password" });
  }
});

// Logout User
const logout = asyncHandler(async (req, res) => {
  console.log(" server side Logging out");
  res.cookie("token", "", {
    path: "/",

    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json("Successfully Logged Out");
});

// Get User Data
const getUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

// Get User Data - userManager
const getOneUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (user) {
    const { _id, name, email, photo, phone, bio, role } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      role,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

//Edit User - userManager
const editOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete User - userManager

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).sort("-createdAt"); // Fetch all users without filtering by user ID
  res.status(200).json(users);
});

// Get Login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

// Update User
const updateUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  if (req.user._id === req.params.id) {
    return res
      .status(403)
      .json({ message: "You can only update your account" });
  }
  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, photo, phone, bio } = user;
    user.email = email;
    user.name = req.body.name || name;
    user.phone = req.body.phone || phone;
    user.bio = req.body.bio || bio;
    user.photo = req.body.photo || photo;
    if (req.user.role === "admin") {
      user.role = req.body.role || user.role;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      photo: updatedUser.photo,
      phone: updatedUser.phone,
      bio: updatedUser.bio,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Delete User Account

const deleteUserAccount = asyncHandler(async (req, res, next) => {
  console.log(2222222);
  console.log(req.user._id);
  console.log(req.params.id);
  if (
    !mongoose.Types.ObjectId.isValid(req.params.id) ||
    !req.user._id.equals(req.params.id)
  ) {
    return res
      .status(403)
      .json({ message: "You can only delete your account" });
  }
  try {
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: "Account Deleted" });
  } catch (error) {
    next(error);
  }
});

//change password
const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { oldPassword, password } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found, please signup");
  }
  //Validate
  if (!oldPassword || !password) {
    res.status(400);
    throw new Error("Please add old and new password");
  }

  // check if old password matches password in DB
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  // Save new password
  if (user && passwordIsCorrect) {
    user.password = password;
    await user.save();
    res.status(200).send("Password change successful");
  } else {
    res.status(400);
    throw new Error("Old password is incorrect");
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  // Generate OTP

  const otp = await generateOTP();
  console.log("otp in the email", otp);

  // Reset Email
  const message = `
          <h2>Hello ${email}</h2>
          <p>Please use the OTP below to reset your password</p>
          <h3>OTP: ${otp}</h3>
          <p>ResQ Team</p>
        `;
  const subject = "Password Reset Request";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;

  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Reset Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

// Generate OTP
const generateOTP = asyncHandler(async (req, res) => {
  const OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  console.log("generated OTP", OTP);
  localStorage.setItem("OTP", OTP); // Store OTP in localStorage
  localStorage.setItem("resetSession", false); // Set a flag for session reset
  const otp = localStorage.getItem("OTP");
  console.log("otp in the local storage", otp);
  return OTP;
});

//Verify OTP
const verifyOTP = asyncHandler(async (req, res) => {
  const { otp } = req.body;
  console.log("hello ", otp, localStorage.getItem("OTP"));
  if (parseInt(otp) === parseInt(localStorage.getItem("OTP"))) {
    localStorage.setItem("OTP", null); // reset OTP
    localStorage.setItem("resetSession", true); // reset resetSession

    res.status(200).json({ message: "OTP Verified" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
});

//Reset Password Session
const resetPasswordSession = asyncHandler(async (req, res) => {
  if (localStorage.getItem("resetSession")) {
    localStorage.setItem("resetSession", false); //allow accee to this route only once
    return res.status(200).json({ message: "Access granted!" });
  } else {
    return res.status(440).json({ message: "Session Expired!" });
  }
});

//reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // Hash new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.findOne({ email }); // Find user by email
  if (localStorage.getItem("resetSession") === false)
    return res.status(440).json({ message: "Session Expired!" });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  await User.updateOne({ email: email }, { password: hashedPassword }); // Corrected the query
  console.log("Password updated");
  localStorage.setItem("resetSession", false);
  res.status(200).json({ message: "Password updated" });
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  getUsers,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
  resetPassword,
  getOneUser,
  editOneUser,
  deleteUser,
  deleteUserAccount,
  generateOTP,
  verifyOTP,
  resetPasswordSession,
};
