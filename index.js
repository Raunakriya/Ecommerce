//______________import packages________________//
const express=require("express");
const app=express();

//___________import routes___________________//
const productRoute=require("./routes/product")



// ____________DB Connection______________________//
const db = require('./config/mongoose')

//___________middleware to convert request in json___//
app.use(express.json());


//_______________route root setup________________//
app.use("/api/products" ,productRoute);

// ____________listing on port___________________//     
app.listen( 5000 ,() => {
console.log("Backend server is running fine");
});