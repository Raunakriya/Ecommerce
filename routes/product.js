
const router = require("express").Router();

//__________ initializing product controllers_____________//
const productController = require('../controller/product')


//____________To Get all Products________________________//
router.get('/', productController.getProducts)

//____________To Create Product________________________//
router.post("/create", productController.createProduct);

//____________To Update Product with id________________________//
router.put('/:id/update_quantity/', productController.updateQuantity)

//____________To delete Product with id________________________//
router.delete('/:id', productController.deleteProduct);



module.exports = router;