import { v2 as cloudinary } from "cloudinary"

const ConnectCloudinary = async () => {
  const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } = process.env

  if (!CLOUDINARY_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_SECRET_KEY) {
    const missing = [
      !CLOUDINARY_NAME && "CLOUDINARY_NAME",
      !CLOUDINARY_API_KEY && "CLOUDINARY_API_KEY",
      !CLOUDINARY_SECRET_KEY && "CLOUDINARY_SECRET_KEY",
    ].filter(Boolean)

    console.error("Cloudinary config error: missing env vars:", missing)
    throw new Error(`Cloudinary config error: missing env vars ${missing.join(", ")}`)
  }

  cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY,
  })

  console.log("Cloudinary configured:", {
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY ? "***" : undefined,
    api_secret: CLOUDINARY_SECRET_KEY ? "***" : undefined,
  })
}

export default ConnectCloudinary;