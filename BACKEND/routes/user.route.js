const express = require("express");
const router = express.Router();

const {
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
  deleteUserAccount,
  generateOTP,
  getOneUser,
  verifyOTP,
  resetPasswordSession,
} = require("../controllers/user.controller");
const protect = require("../middleWare/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete/:id", protect, deleteUserAccount);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/getusers", protect, getUsers);
router.get("/loggedin", loginStatus);
router.patch("/updateuser/:id", protect, updateUser);
router.patch("/changepassword", protect, changePassword);
router.get("/genarateotp", generateOTP);
router.post("/verifyotp", verifyOTP);
router.put("/resetpassword", resetPassword);
router.post("/forgotpassword", forgotPassword);

module.exports = router;
