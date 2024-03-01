const express = require("express");
const router = express.Router();
const User = require("../models/user.models.js");
const { getUsers } = require("../controllers/user.controller.js");

router.get("/", getUsers);
