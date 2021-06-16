const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// affiche les membres classé par nouveauté par défaut quand on est visiteur
router.get('/', userController.showAllMembers);

// affiche un membre
router.get('/:id', userController.showMember);





/*
// ajoute un article
router.post('/', userController.addArticle);

// supprime un article
router.delete('/:id', userController.deleteArticle);

// modifie un article
router.put('/:id', userController.updateArticle);
*/


module.exports = router;