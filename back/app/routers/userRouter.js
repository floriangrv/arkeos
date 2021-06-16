const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


router.use(authenticateToken);
// affiche les membres classé par nouveauté par défaut quand on est visiteur
router.get('/', userController.showAllMembers);

// affiche un membre
router.get('/:id', userController.showMember);






/*
// supprime un article
router.delete('/:id', userController.deleteArticle);

// modifie un article
router.put('/:id', userController.updateArticle);
*/


module.exports = router;