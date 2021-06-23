const express = require('express');

const router = express.Router();

const messageController = require('../controllers/messageController');


// middleware pour controller le token
const {authenticateToken} = require('../middlewares/members');

//router.use(authenticateToken);

// affiche les messages
router.get('/', messageController.showMessages);



module.exports = router;