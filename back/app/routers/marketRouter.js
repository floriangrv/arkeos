const express = require('express');
const router = express.Router();

const marketplaceController = require('../controllers/marketplaceController');

// Pour le controle des données utilisateurs
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');


// affiche les articles classé par nouveauté par défaut dans le marketplace
router.get('/', marketplaceController.getAllMarket);


// après il faut être connecté pour avoir accès
router.use(authenticateToken);

// affiche un article du marketplace
router.get('/:id', marketplaceController.showMarket);

// ajoute un article dans la marketplace
router.post('/', validate.body(schemas.marketplaceInsertSchema), marketplaceController.addMarket);

// supprime un article du marketplace
router.delete('/:id', marketplaceController.deleteMarket);

// modifie un article du marketplace
router.put('/:id', validate.body(schemas.marketplaceUpdateSchema), marketplaceController.updateMarket);


module.exports = router;