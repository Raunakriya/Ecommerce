const mongoose = require("mongoose")

//___________creating product schema_________//
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,

        }
    },
  
);

//_______________creating a new model called "Product"
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;