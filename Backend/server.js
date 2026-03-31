import express from "express"; 
import mongoose from "mongoose"; 
import cors from "cors"; 
import dotenv from "dotenv";    
import ConnectCloudinary from "./Config/cloudinary.js";
import userRouter from "./Routes/useroute.js";
import productRouter from "./Routes/productroute.js";
import cartRouter from "./Routes/cartRoute.js";
import orderRouter from "./Routes/orderRoute.js";
dotenv.config(); 
console.log("SERVER KEY:", process.env.STRIPE_SECRET_KEY);
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get("/", (req,res)=>{
  res.send("Server is Running 🚀")
})

ConnectCloudinary()
// MongoDB Connection 
mongoose.connect(process.env.MONGO_URL) 
.then(() => console.log("MongoDB Connected")) 
.catch(err => console.log(err)); 
app.listen(5000, () => { 
console.log("Server running on port 5000"); 
});