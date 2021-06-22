const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// Pour le controle des données utilisateurs
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


router.use(authenticateToken);
// affiche les membres classé par nouveauté par défaut quand on est visiteur
router.get('/', userController.showAllMembers);

// recherche un ou des membres, par ville ou username
router.get('/search', userController.searchMembers);

// affiche un membre
router.get('/:id', userController.showMember);

// supprime un membre
router.delete('/:id', userController.deleteUser);

// modifie un membre
router.put('/:id', validate.body(schemas.userUpdateSchema), userController.updateUser);



module.exports = router;