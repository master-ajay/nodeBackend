import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const fileExists = (filePath) => {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    console.error(`Error checking file existence: ${err.message}`);
    return false;
  }
};

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Check if file exists before trying to delete it
    if (fileExists(localFilePath)) {
      fs.unlinkSync(localFilePath); // remove the local file after successful upload
    }

    return response;
  } catch (error) {
    console.error(`Cloudinary upload failed: ${JSON.stringify(error)}`);

    // Ensure file exists before attempting to delete it
    if (fileExists(localFilePath)) {
      fs.unlinkSync(localFilePath); // remove the local file if an error occurred
    }
  }
};

export { uploadOnCloudinary };
