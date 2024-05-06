const express = require("express");
const router = express.Router();
const {
  getUsers,
  getOneUser,
  editOneUser,
  deleteUser,
  getAdopter,
  getLoginData,
} = require("../controllers/user.controller");

const {
  createUser,
  createEmployee,
} = require("../controllers/usermanager.controller");
const protect = require("../middleWare/authMiddleware");

router.post("/userProfile/createUser", createUser);
router.get("/userProfile/viewUser/:id", getOneUser); // protect, should be add
router.get("/userProfile", getUsers); // protect, should be add
router.patch("/userProfile/editUser/:id", editOneUser); //protect should be add
router.delete("/userProfile/removeUser/:id", deleteUser); // protect, should be add
router.post("/employee/create-employee", createEmployee);
router.get("/userProfile/view-adopter/:id", getAdopter); //get adopter
router.get("/userProfile/view-loginData", getLoginData); //get login data

module.exports = router;
