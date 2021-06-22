const Joi = require('joi');


const insertSchema = Joi.object({
    title: Joi.string().alphanum().min(4).max(40).required(),
    content: Joi.string().alphanum().min(200).max(2000).required(),
    author_id: Joi.number().integer().required(),
    category_id: Joi.number().integer().min(1).max(4).required(),
    theme_id: Joi.number().integer().min(1).max(7).required()
}).required();


const updatedSchema = Joi.object({
    title: Joi.string().alphanum().min(4).max(40),
    content: Joi.string().alphanum().min(200).max(2000),
    category_id: Joi.number().integer().min(1).max(4),
    theme_id: Joi.number().integer().min(1).max(7)
}).required();



module.exports = { insertSchema, updatedSchema };