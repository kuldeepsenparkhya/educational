import { Project } from "../models/Project.js";
import fs from "fs";

// CREATE
export const createProject = async (req, res) => {
  try {
    const { title, description, skills } = req.body;

    if (!title || !description || !skills) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and skills are required fields",
      });
    }

    const images = req.cloudinaryFiles?.map((file) => file.secure_url) || [];

    const project = new Project({
      title,
      description,
      skills: JSON.parse(skills),
      images,
    });

    await project.save();

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: err.message,
    });
  }
};


// GET ALL
export const getAllProjects = async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const projects = await Project.find().sort({ createdAt: -1 });

    const updatedProjects = projects.map((project) => ({
      ...project.toObject(),
      images: project.images.map((img) => img.startsWith("http") ? img : `${baseUrl}${img}`),
    }));

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      total: updatedProjects.length,
      data: updatedProjects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: err.message,
    });
  }
};

// GET BY ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const updatedProject = {
      ...project.toObject(),
      images: project.images.map((img) => img.startsWith("http") ? img : `${baseUrl}${img}`),
    };

    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: updatedProject,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
      error: err.message,
    });
  }
};

// UPDATE BY ID
export const updateProjectById = async (req, res) => {
  try {
    const { title, description, skills } = req.body;

    const updateData = {
      title,
      description,
      skills: JSON.parse(skills),
    };

    // Use Cloudinary image URLs if new files are uploaded
    if (req.cloudinaryFiles && req.cloudinaryFiles.length > 0) {
      updateData.images = req.cloudinaryFiles.map((file) => file.secure_url);
    }

    const updated = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update project",
      error: err.message,
    });
  }
};

// DELETE
export const deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    project.images.forEach((imgPath) => {
      const filePath = "." + new URL(imgPath, `http://${req.headers.host}`).pathname;
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    });

    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project",
      error: err.message,
    });
  }
};


