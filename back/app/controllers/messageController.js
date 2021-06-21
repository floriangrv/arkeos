const MessageModel = require('../models/messageModel');
const ChatViewModel = require('../models/chatViewModel');


exports.showMessages = async (request, response, next) => {
    try {
        const id = {};
        id.receiver = parseInt(request.params.receiver, 10);
        id.sender = parseInt(request.params.sender, 10);

        console.log(id.receiver, id.sender);
        if (isNaN(id.receiver) || isNaN(id.sender)){
            return next();
        }

        const messages = await ChatViewModel.showConversation(id);
        console.log(messages);

        if(!messages){
            return next();
        }
        //console.log(messages);
        response.json(messages);
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};