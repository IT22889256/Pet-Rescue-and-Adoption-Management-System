const express = require("express");
const router = express.Router();
const {getProduct, displayProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')


 router.get('/items', displayProducts);
// router.get("/:id", getProduct);

router.post("/items/createItem", createProduct);

// edit a item
router.put("/items/edititem/:id", updateProduct);

// delete an  item
router.delete("/items/removeitem/:id", deleteProduct);


//get one item
router.get("/items/viewitem/:id", getProduct);



module.exports = router;