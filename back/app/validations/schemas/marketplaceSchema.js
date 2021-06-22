const Joi = require('joi');


const insertSchema = Joi.object({
    locality: Joi.string().alphanum().min(3).max(20),
    phase: Joi.string().alphanum().max(40),
    content: Joi.string().alphanum().min(5).max(200),
    scientific_name: Joi.string().alphanum().min(4).max(40).required(),
    born_captivity: Joi.bool().required(),
    price: Joi.number().precision(2).max(20000).required(),
    native_country: Joi.string().alphanum().min(3).max(20).required(),
    birth_date: Joi.date().max('now').required(),
    author_id: Joi.number().integer().min(1).required(),
    category_id: Joi.number().integer().min(1).max(4).required()
}).required();

const updatedSchema = Joi.object({
    locality: Joi.string().alphanum().min(3).max(20),
    phase: Joi.string().alphanum().max(40),
    content: Joi.string().alphanum().min(5).max(200),
    scientific_name: Joi.string().alphanum().min(4).max(40),
    born_captivity: Joi.bool(),
    price: Joi.number().precision(2).max(20000),
    native_country: Joi.string().alphanum().min(3).max(20),
    birth_date: Joi.date().max('now'),
    author_id: Joi.number().integer().min(1),
    category_id: Joi.number().integer().min(1).max(4)
}).required();



module.exports = { insertSchema, updatedSchema };