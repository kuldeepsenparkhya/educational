import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    helpMessage: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
