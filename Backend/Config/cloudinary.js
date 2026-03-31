import  {v2 as cloudinary} from "cloudinary"
 const ConnectCloudinary = async()=>{
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_key,
    api_secret:process.env.CLOUDINARY_SECRET_key
})

}
export default ConnectCloudinary;