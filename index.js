const express=require("express");
const app=express();

const productRoute=require("./routes/product")



// -----------DB Connection---------------------------//
const db = require('./config/mongoose')


app.use(express.json());
//app.use("/api/users" ,userRoute);

app.use("/api/products" ,productRoute);


app.listen( 5000 ,() => {
console.log("Backend server is running fine");
});