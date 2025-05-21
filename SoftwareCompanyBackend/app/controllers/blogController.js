import { Blog } from "../models/Blog.js";

// CREATE
export const createBlog = async (req, res) => {
  try {
    const { title, description, skills, personName } = req.body;

    if (!title || !description || !skills || !personName) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const images = req.cloudinaryFiles?.map((file) => file.secure_url) || [];
    const personImage = req.personImage || null;

    const blog = new Blog({
      title,
      description,
      skills: JSON.parse(skills),
      images,
      personImage,
      personName,
    });

    await blog.save();

    res.status(201).json({ success: true, message: "Blog created", data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const updatedBlogs = blogs.map((blog) => ({
      ...blog.toObject(),
      images: blog.images.map((img) => (img.startsWith("http") ? img : `${baseUrl}${img}`)),
      personImage: blog.personImage?.startsWith("http") ? blog.personImage : `${baseUrl}${blog.personImage}`,
    }));

    res.status(200).json({ success: true, data: updatedBlogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET BY ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const updatedBlog = {
      ...blog.toObject(),
      images: blog.images.map((img) => (img.startsWith("http") ? img : `${baseUrl}${img}`)),
      personImage: blog.personImage?.startsWith("http") ? blog.personImage : `${baseUrl}${blog.personImage}`,
    };

    res.status(200).json({ success: true, data: updatedBlog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE
export const updateBlog = async (req, res) => {
  try {
    const { title, description, skills, personName } = req.body;
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const updateData = {
      title,
      description,
      skills: JSON.parse(skills),
      personName,
    };

    if (req.cloudinaryFiles && req.cloudinaryFiles.length > 0) {
      updateData.images = req.cloudinaryFiles.map((file) => file.secure_url);
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    res.status(200).json({ success: true, message: "Blog deleted", data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
