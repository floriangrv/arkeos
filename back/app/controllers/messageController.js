const MessageModel = require('../models/messageModel');
const ChatViewModel = require('../models/chatViewModel');


exports.showMessages = async (request, response, next) => {
    try {
        const id = {};
        //id.receiver = parseInt(request.params.receiver, 10);
        id.sender = parseInt(request.params.sender, 10);

        id.receiver = 1;


        if (isNaN(id.receiver) || isNaN(id.sender)){
            return next();
        }

        const messages = await ChatViewModel.showConversation(id);

        if(!messages){
            return next();
        }

        console.log(messages);
        
        const author_conversation = messages[0].sender_id;

        //response.json(messages);

        response.render('index', {messages, author_conversation});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.addMessages = async (request, response, next) => {
    try {
        const data = {};
        //data.receiver_id = parseInt(request.params.receiver, 10);
        data.sender_id = parseInt(request.params.sender, 10);
        
        data.receiver_id = 1;
        
        data.content = request.body;

        const test = request.body;
        console.log(test);

        console.log("le data content", data.content);
        console.log(data);

        if (isNaN(id.receiver) || isNaN(id.sender)){
            return next();
        }

        //const messages = await ChatViewModel.addConversation(data);

        if(!messages){
            return next();
        }

        console.log(messages);

        //response.json(messages);

        response.json({messages});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};