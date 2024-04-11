const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUsers,
  getOneUser,
  editOneUser,
  deleteUser,
} = require("../controllers/user.controller");

const { createUser } = require("../controllers/usermanager.controller");
const protect = require("../middleWare/authMiddleware");

router.post("/userProfile/createUser", createUser);
router.get("/userProfile/viewUser/:id", getOneUser); // protect, should be add
router.get("/userProfile", getUsers); // protect, should be add
router.patch("/userProfile/editUser/:id", editOneUser); //protect should be add
router.delete("/userProfile/removeUser/:id", deleteUser); // protect, should be add

module.exports = router;