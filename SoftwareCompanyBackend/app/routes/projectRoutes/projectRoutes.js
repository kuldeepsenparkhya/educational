import express from "express";
import { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById, } from "../../controllers/projectController.js";

import uploadToCloudinary from "../../middlewares/uploadImage.js";
import projectValidation from "../../vallidations/project.validation.js";
import validateRequest from "../../middlewares/validateRequest.js";

const router = express.Router();

router.post("/createProject", uploadToCloudinary("projects"), validateRequest(projectValidation), createProject);

router.get("/getAllProjects", getAllProjects);
router.get("/getProjectById/:id", getProjectById);
router.put("/updateProjectById/:id",uploadToCloudinary("projects"), validateRequest(projectValidation), updateProjectById);
router.delete("/deleteProjectById/:id", deleteProjectById);

export default router;
