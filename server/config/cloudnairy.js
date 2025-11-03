import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  // This automatically reads CLOUDINARY_URL from your .env file
  cloudinary.config({
    secure: true, // Ensures HTTPS URLs
  });
  console.log("Connected to Cloudnairy")
};

export default connectCloudinary;
