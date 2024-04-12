const express = require("express");
const router = express.Router();
const {getrequest, displayrequest, createrequest,deleterequest,updaterequest} = require('../controllers/request.controller');


 router.get('/request', displayrequest);
// router.get("/:id", getProduct);

router.post("/request/createrequest", createrequest);

// edit a item
router.put("/request/updaterequest/:id", updaterequest);

// delete an  item
router.delete("/request/deleterequest/:id", deleterequest);

//get one item
router.get("/request/viewrequest/:id", getrequest);



module.exports = router;