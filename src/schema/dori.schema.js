import Joi from "joi";

export const createdoriSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  price: Joi.number().positive().required(),
  imageUrl: Joi.string().optional(),
  dorixona: Joi.string().required(), // ObjectId bo'lishi kerak
}).required();



export const updatedoriSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().positive().optional(),
  imageUrl: Joi.string().optional(),
});

