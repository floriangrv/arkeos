const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');

// Pour le controle des données utilisateurs
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

// affiche les articles classé par nouveauté par défaut
router.get('/', articleController.getAllArticles);

// affiche un article
router.get('/:id', articleController.showArticle);


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


router.use(authenticateToken);

// ajoute un article
router.post('/', validate.body(schemas.articleInsertSchema), articleController.addArticle);

// supprime un article
router.delete('/:id', articleController.deleteArticle);

// modifie un article
router.put('/:id', validate.body(schemas.articleUpdateSchema), articleController.updateArticle);

module.exports = router;