const Joi = require('joi');


// Afin de créer des règles de validations pour notre user, on doit créer un schema à l'aide de Joi
const insertSchema = Joi.object({
    // Pour cela on lui donne un objet contenant la structure des informations possible, en précisant pour chacune les règles de restriction.
    username: Joi.string().alphanum().min(4).max(15).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }).required(),
    password: Joi.string().min(6).max(30).required(),
}).required();

const updatedSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }),
    city: Joi.string().min(3).max(30),
    country: Joi.string().min(4).max(20),
    presentation: Joi.string().max(500),
    profile_picture: Joi.string().min(5).max(100)
}).required();


module.exports = { insertSchema, updatedSchema };