const express = require("express");
const router = express.Router();
const {getsuppliers, displaysuppliers, createsuppliers, updatesuppliers, deletesuppliers} = require('../controllers/supplierscontroller')


 router.get('/suppliers', displaysuppliers);
// router.get("/:id", getProduct);

router.post("/suppliers/createsuppliers", createsuppliers);

// edit a item
router.put("/suppliers/editsuppliers/:id", updatesuppliers);

// delete an  item
router.delete("/suppliers/removesuppliers/:id", deletesuppliers);

//get one item
router.get("/suppliers/viewsuppliers/:id", getsuppliers);



module.exports = router;