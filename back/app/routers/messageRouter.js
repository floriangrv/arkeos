const express = require('express');

const router = express.Router();

const messageController = require('../controllers/messageController');


// Pour le controle des données utilisateurs
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


//router.use(authenticateToken);

// affiche les messages
router.get('/:receiver/:sender', messageController.showMessages);




/*
// recherche un ou des membres, par ville ou username
router.get('/search', userController.searchMembers);

// affiche un membre
router.get('/:id', userController.showMember);

*/



/*
// supprime un article
router.delete('/:id', userController.deleteArticle);

// modifie un article
router.put('/:id', userController.updateArticle);
*/


module.exports = router;