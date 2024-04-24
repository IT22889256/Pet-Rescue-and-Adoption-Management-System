const express = require("express");
// const Supply = require("../modules/messagesmodel.js");
const router = express.Router();
const { getmessage, getmessages, createmessages, updatemessages, deletemessages } = require('../controllers/messagescontroller.js');

router.get('/messages', getmessage);
// router.get("/:id", getAdoption);

// create an adoption
router.post("/messages/createmessages", createmessages);

//view an adoption
router.get("/messages/viewmessages/:id", getmessages)

// update an adoption
router.put("/messages/editmessages/:id", updatemessages);

// delete an adoption
router.delete("/messages/deletemessages/:id", deletemessages);

module.exports = router;
