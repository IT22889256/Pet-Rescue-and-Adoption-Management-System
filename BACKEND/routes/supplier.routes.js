const express = require("express");
const router = express.Router();
const {getsupplier, displaysupplier, createsupplier, updatesupplier, deletesupplier} = require('../controllers/suppliercontroller')


 router.get('/supplier', displaysupplier);
// router.get("/:id", getProduct);

router.post("/supplier/createsupplier", createsupplier);

// edit a item
router.put("/supplier/editsupplier/:id", updatesupplier);

// delete an  item
router.delete("/supplier/removesupplier/:id", deletesupplier);

//get one item
router.get("/supplier/viewsupplier/:id", getsupplier);



module.exports = router;