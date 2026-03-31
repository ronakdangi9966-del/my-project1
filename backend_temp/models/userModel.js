import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel=mongoose.models.user||mongoose.model('user',userschema);
export default userModel