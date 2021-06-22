const express = require('express');

const router = express.Router();


const userController = require('../controllers/userController');

// Pour le controle des données utilisateurs
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

// ajoute un membre
router.post('/', validate.body(schemas.userInsertSchema), userController.addMember);


module.exports = router;