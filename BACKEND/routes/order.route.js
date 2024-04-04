const express = require("express");
const router = express.Router();
const {getorder, displayorder, createorder, updateorder, deleteorder} = require('../controllers/ordercontroller')


router.get('/order', displayorder);
// router.get("/:id", getProduct);

router.post("/order/createorder", createorder);

// edit a item
router.put("/order/editorder/:id", updateorder);

// delete an  item
router.delete("/order/removeorder/:id", deleteorder);


//get one item
router.get("/order/vieworder/:id", getorder);



module.exports = router;