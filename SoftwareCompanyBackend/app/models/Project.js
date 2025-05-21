import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills: [{ type: String, required: true }],
    images: { type: [String], required: true }
  },
  { timestamps: true }
);

export const Project = mongoose.model('Project', projectSchema);
