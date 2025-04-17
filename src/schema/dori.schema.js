import Joi from "joi";

export const createDoriSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().positive().required(),
  imageUrl: Joi.string(),
  category: Joi.string().required(),
}).required();


export const updateDoriSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number().positive(),
});