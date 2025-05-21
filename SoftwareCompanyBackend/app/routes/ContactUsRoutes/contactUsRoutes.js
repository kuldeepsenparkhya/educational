import express from "express";
import { createContact,getAllContacts } from "../../controllers/contactController.js";

const router = express.Router();

router.post("/createContact", createContact);
router.get('/getAllContacts', getAllContacts); 

export default router;
