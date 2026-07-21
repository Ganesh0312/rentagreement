import { env } from "@/config/env";
import { v2 as cloudinary } from "cloudinary";

export function configureCloudinary() {
  if (
    !env.cloudinaryCloudName ||
    !env.cloudinaryApiKey ||
    !env.cloudinaryApiSecret
  ) {
    throw new Error("Cloudinary is not configured");
  }

  cloudinary.config({
    cloud_name: env.cloudinaryCloudName,
    api_key: env.cloudinaryApiKey,
    api_secret: env.cloudinaryApiSecret,
  });

  return cloudinary;
}

export async function deleteCloudinaryAsset(publicId: string) {
  const client = configureCloudinary();
  return client.uploader.destroy(publicId);
}
