import express from "express";
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from "../../controllers/blogController.js";
import uploadToCloudinary from "../../middlewares/uploadImage.js";
import blogsValidations from "../../vallidations/blogs.validations.js"
import validateRequest from "../../middlewares/validateRequest.js";

// import { upload } from "../../middlewares/uploadImage.js";

const router = express.Router();

router.post("/createBlog", uploadToCloudinary("blogs"), validateRequest(blogsValidations), createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);
router.put("/updateBlog/:id",uploadToCloudinary("blogs"), validateRequest(blogsValidations), updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

export default router;
