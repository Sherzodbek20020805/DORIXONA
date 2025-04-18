import Joi from "joi";

export const createdorixonaSchema = Joi.object({
  nomi: Joi.string().min(2).max(100).required(),
  manzil: Joi.string().min(5).required(),
  lokatsiya: Joi.object({
    kenglik: Joi.number().required(),
    uzunlik: Joi.number().required()
  }).required(),
  ishVaqti: Joi.string().optional(),
  aloqa: Joi.string().optional()
}).required();

export const updatedorixonaSchema = Joi.object({
  nomi: Joi.string().min(2).max(100).optional(),
  manzil: Joi.string().min(5).optional(),
  lokatsiya: Joi.object({
    kenglik: Joi.number().required(),
    uzunlik: Joi.number().required()
  }).optional(),
  ishVaqti: Joi.string().optional(),
  aloqa: Joi.string().optional()
}).required();
