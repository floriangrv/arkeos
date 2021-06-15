const express = require('express');
const router = express.Router();

const marketplaceController = require('../controllers/marketplaceController');

// affiche les articles classé par nouveauté par défaut dans le marketplace
router.get('/', marketplaceController.getAllMarket);

// affiche un article du marketplace
router.get('/:id', marketplaceController.showMarket);

// ajoute un article du marketplace
router.post('/', marketplaceController.addMarket);

// supprime un article du marketplace
router.delete('/:id', marketplaceController.deleteMarket);

// modifie un article du marketplace
router.put('/:id', marketplaceController.updateMarket);


module.exports = router;