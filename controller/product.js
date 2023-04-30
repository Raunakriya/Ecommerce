const Product = require('../models/product');




//**********Add Product********/

exports.createProduct = async (req, res) => {
  const { name, quantity } = req.body;

  try {
    const product = new Product({ name, quantity });
    const savedProduct = await product.save();
    res.status(201).json({ data: { product: savedProduct } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};


//******************Get Products******************** */



exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({ data: { products } });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
  
//*********************Delete Product************************ /



exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ data: { message: 'Product deleted' } });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };

  
  //***************************Update Products***********************/
 

exports.updateQuantity = async (req, res) => {
    const { id } = req.params;
    const { number } = req.query;
   
    try {
      const product = await Product.findByIdAndUpdate(
        id,
        { $inc: { quantity: Number(number) } },
        { new: true }
      );
      res.status(200).json({
        data: { product },
        message: 'Updated successfully',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
  