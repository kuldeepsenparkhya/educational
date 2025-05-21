// import path from "path";
// import fs from "fs";
// import multer from "multer";

// // const uploadDir = "./uploads";
// const uploadDir = path.join(process.cwd(), "uploads");

// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadDir),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) cb(null, true);
//   else cb(new Error("Only image files are allowed!"), false);
// };

// export const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });


import multer from "multer";
import sharp from "sharp";
import streamifier from "streamifier";
import cloudinary from "../config/cloudinaryConfig.js";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, 
});

const uploadToCloudinaryBuffer = (buffer, folder, options = {}) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, ...options },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });

// const uploadToCloudinary = (folderName = "uploads") => [
//   upload.array("files"), 
    

//   async (req, res, next) => {
//     if (!req.files || !req.files.length) {
//       return res.status(400).json({ error: "No files uploaded" });
//     }
  

//     try {
//       const uploadPromises = req.files.map(async (file) => {
//         const { mimetype, buffer } = file;
//         let fileBuffer = buffer;
//         let uploadOptions = { folder: folderName };

//         if (mimetype.startsWith("image/")) {
//           fileBuffer = await sharp(buffer)
//             .resize({ width: 1024 })
//             .webp({ quality: 80 })
//             .toBuffer();
//           uploadOptions.format = "webp";
//         }

//         return await uploadToCloudinaryBuffer(fileBuffer, folderName, uploadOptions);
//       });

//       const results = await Promise.all(uploadPromises);
//       req.cloudinaryFiles = results; 
//       next();
//     } catch (error) {
//       console.error("Upload Error:", error);
//       res.status(500).json({ error: error.message || "Upload failed" });
//     }
//   },
// ];

const uploadToCloudinary = (folderName = "uploads") => [
  upload.fields([
    { name: "files", maxCount: 10 },
    { name: "personImage", maxCount: 1 },
  ]),
  async (req, res, next) => {
    if (!req.files) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    try {
      const cloudinaryFiles = [];

      // Handle blog images
      if (req.files.files) {
        const imageUploads = await Promise.all(
          req.files.files.map(async (file) => {
            const { buffer, mimetype } = file;
            const resized = await sharp(buffer)
              .resize({ width: 1024 })
              .webp({ quality: 80 })
              .toBuffer();
            return uploadToCloudinaryBuffer(resized, folderName, {
              format: "webp",
            });
          })
        );
        cloudinaryFiles.push(...imageUploads);
      }

      // Handle person image
      let personImageUrl = null;
      if (req.files.personImage && req.files.personImage[0]) {
        const { buffer, mimetype } = req.files.personImage[0];
        const resized = await sharp(buffer)
          .resize({ width: 512 })
          .webp({ quality: 80 })
          .toBuffer();

        const result = await uploadToCloudinaryBuffer(resized, folderName, {
          format: "webp",
        });
        personImageUrl = result.secure_url;
      }

      // Attach results to req
      req.cloudinaryFiles = cloudinaryFiles;
      req.personImage = personImageUrl;

      next();
    } catch (error) {
      console.error("Upload Error:", error);
      res.status(500).json({ error: error.message || "Upload failed" });
    }
  },
];


export default uploadToCloudinary;
