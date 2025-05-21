import { Contact } from "../models/ContactUs.js";
import { sendEmail } from "../utills/sendEmail.js";
import { contactUsSchema } from "../vallidations/ContactUs.js";

export const createContact = async (req, res) => {
  try {
    const { error } = contactUsSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const contact = new Contact(req.body);
    await contact.save();

    await sendEmail({
      name: req.body.name,
      email: req.body.email,
      message: req.body.helpMessage,
    });

    res.status(201).json({ message: "Contact request submitted successfully!" });
  } catch (err) {
    console.error("Contact creation error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Contact Us details fetched successfully',
      total: contacts.length,
      data: contacts,
    });
  } catch (err) {
    console.error('Get Contacts Error:', err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Contact Us details',
      error: err.message,
    });
  }
};
