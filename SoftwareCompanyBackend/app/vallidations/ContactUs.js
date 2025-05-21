import Joi from "joi";

export const contactUsSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  helpMessage: Joi.string().min(10).required(),
});
