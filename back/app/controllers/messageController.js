const MessageModel = require('../models/messageModel');
const ChatViewModel = require('../models/chatViewModel');


exports.showMessages = async (request, response, next) => {
    try {
        const id = {};
        id.receiver = parseInt(request.params.receiver, 10);

        //id.sender = request.user;

        id.sender = 1;

        if (isNaN(id.receiver) || isNaN(id.sender)){
            return next();
        }

        const messages = await ChatViewModel.showConversation(id);

        if(!messages){
            return next();
        }

        console.log(messages);

        response.json({messages});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.addMessages = async (request, response, next) => {
    try {
        const data = {};
   
        data.receiver_id = parseInt(request.params.receiver, 10);
        
        //data.sender_id = request.user;
        data.sender_id = 1;
        
        data.content = request.body;

        if (isNaN(id.receiver) || isNaN(id.sender)){
            return next();
        }

        const messages = await MessageModel.addConversation(data);

        if(!messages){
            return next();
        }

        console.log(messages);

        response.json({messages});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};