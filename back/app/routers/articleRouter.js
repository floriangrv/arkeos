const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');

// montre les articles classé par nouveauté
router.get('/', articleController.getAllArticles);

/*
// trie les articles par dates
router.get('/articles/date', );

// trie les articles par catégories
router.get('/articles/categorie/?');

// affiche les articles qui correspondent au(x) mot(s) cléf(s)
router.get('/articles/search/?search', );

// ajoute un article
router.post('/', );
*/

module.exports = router;