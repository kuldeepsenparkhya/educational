import Joi from "joi";


const projectValidation = Joi.object({
  title: Joi.string().min(3).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title should be at least 3 characters long",
  }),
  description: Joi.string().min(10).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description should be at least 10 characters long",
  }),
  skills: Joi.alternatives()
    .try(Joi.array().items(Joi.string().min(2)), Joi.string()) 
    .required()
    .messages({
      "array.base": "Skills should be an array of strings",
      "any.required": "At least one skill is required",
    }),
});

export default projectValidation