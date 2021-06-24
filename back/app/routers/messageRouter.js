const express = require('express');

const router = express.Router();

const messageController = require('../controllers/messageController');


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');

//router.use(authenticateToken);

// affiche les messages
router.get('/:receiver', messageController.showMessages);

// envoie un message
router.post('/:receiver', messageController.addMessages);

module.exports = router;