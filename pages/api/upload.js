import cloudinary from "../../lib/cloudinary";
import multer from "multer";
import fs from "fs";

const upload = multer({
  dest: "/tmp",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  try {
    await runMiddleware(req, res, upload.single("image"));

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "notice-board",
    });

    fs.unlinkSync(req.file.path);

    return res.status(200).json({
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Upload failed",
    });
  }
}