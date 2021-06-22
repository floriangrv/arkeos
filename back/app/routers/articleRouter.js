const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');

// affiche les articles classé par nouveauté par défaut
router.get('/', articleController.getAllArticles);

// affiche un article
router.get('/:id', articleController.showArticle);


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


router.use(authenticateToken);

// ajoute un article
router.post('/', articleController.addArticle);

// supprime un article
router.delete('/:id', articleController.deleteArticle);

// modifie un article
router.put('/:id', articleController.updateArticle);

module.exports = router;