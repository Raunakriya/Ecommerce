
const router = require("express").Router();
const productController = require('../controller/product')



router.get('/products', productController.getProducts)

router.post("/create", productController.createProduct);

router.put('/:id/update_quantity/', productController.updateQuantity)

router.delete('/:id', productController.deleteProduct);


module.exports = router;