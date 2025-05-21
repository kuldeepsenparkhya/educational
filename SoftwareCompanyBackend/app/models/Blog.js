import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  images: { type: [String], default: [] },
  personImage: { type: String },
  personName: { type: String, required: true },
}, { timestamps: true });

export const Blog = mongoose.model('Blog', blogSchema);
