const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');

// montre les articles classé par nouveauté par défaut
// les params date et rating attendent la valeur ASC ou DESC, il ne peut y'avoir qu'un des deux params, soit date, soit rating
router.get('/articles(/:nbArticles)?(/:category)?(/:theme)?(/:date)?(/:rating)?(/:search)?', articleController.getAllArticles);

/*
// trie les articles par dates
router.get('/articles/date', );

// trie les articles par catégories
router.get('/articles/categorie/?');

// affiche les articles qui correspondent au(x) mot(s) cléf(s)
router.get('/articles/search/?search', );
*/


// ajoute un article
router.post('/article', articleController.addArticle);

// supprime un article
router.delete('/article/:id', articleController.deleteArticle);

// modifie un article
router.put('/article/:id', articleController.updateArticle);

module.exports = router;