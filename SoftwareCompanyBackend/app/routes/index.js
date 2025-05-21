import express from 'express';
import contactUsRoutes from './ContactUsRoutes/contactUsRoutes.js';
import projectRoutes from "./projectRoutes/projectRoutes.js"
import BlogsRoutes from "./blogRoutes/blogRoutes.js"

const router = express.Router();

router.use('/api/v1', contactUsRoutes);
router.use('/api/v1', projectRoutes);
router.use('/api/v1', BlogsRoutes);


export default router;