import productModel from "../Modals/productModel.js";
import {v2 as cloudinary} from "cloudinary";
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body

    // ✅ parse sizes here
    const parsedSizes = JSON.parse(sizes)

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1, image2, image3, image4].filter(item => item !== undefined)

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
        return result.secure_url
      })
    )
    const product = new productModel({
      name,
      description,
      price,
      category,
      subCategory,
      bestseller,
      sizes: parsedSizes, 
      image: imagesUrl
    })

    await product.save()

    res.json({ success: true, message: "Product added successfully" })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

//Function for List product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        console.log("PRODUCTS:", products);

        res.json({ success: true, products });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
//Functio for remove products
const removeProduct=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"product remove"})
    } catch (error) {
          res.json({success:false,message:message.error})
        
    }
    
}

//Functio for single product info products
const singleProduct=async(req,res)=>{
    try {
        const {productId}=req.body
        const product=await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
          res.json({success:false,message:message.error})
        
    }
    
}

export{listProduct,addProduct,removeProduct,singleProduct}