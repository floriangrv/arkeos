const MessageModel = require('../models/messageModel');
const ChatViewModel = require('../models/chatViewModel');
const UserModel = require("../models/userModel");


exports.showMessages = async (request, response, next) => {
    try {
        const id = {};
        id.receiver = parseInt(request.params.receiver, 10);

        id.sender = request.user;

        //id.sender = 1;

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
   
        data.receiver = parseInt(request.params.receiver, 10);
        
        data.sender = request.user;
        
        //data.sender = 1;
        
        data.content = request.body.content;

        if (isNaN(data.receiver) || isNaN(data.sender)){
            return next();
        }


        const searchIfMessages = await ChatViewModel.showConversation(data);

        let messages;
        if (searchIfMessages){
            data.discussion_id = searchIfMessages[0].discussion_id;
            messages = await MessageModel.addConversation(data);
        } else {
            const discussion = await MessageModel.addDiscussion(data.sender);
            console.log("la discussion", discussion);
            data.discussion_id = discussion.id;
            messages = await MessageModel.addConversation(data);
            console.log("le message", messages);
        }

        response.json({messages});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.showDiscussion = async (request, response, next) => {
    try {
        const id = parseInt(request.user, 10);

        if (isNaN(id)){
            return next();
        }

        const discussions = await ChatViewModel.showDiscussions(id);

        if(!discussions){
            return next();
        }

        const result = [];

        for (const discussion of discussions){
            if (discussion.receiver_id !== id || result.find(value => value !== discussion.receiver_id)){
                const user = await UserModel.findById(discussion.receiver_id);
                user.discussion_id = discussion.discussion_id;
                if (discussion.delete_by){
                    user.discussion.delete_by = discussion.delete_by;
                }
                result.push(user);
            } else if (discussion.sender_id !== id || result.find(value => value !== discussion.sender_id)) {
                const user = await UserModel.findById(discussion.sender_id);
                result.push(user);
            }
        } 


        console.log(result);

        response.json(result);
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.deleteDiscussion = async (request, response, next) => {
    try {
        const data = {};
        data.id_user = request.user;
        data.id_discussion = request.params.discussion;

        if (isNaN(data.id_user) || (isNaN(data.id_discussion))){
            return next();
        }

        const discussion = await MessageModel.deleteDiscussion(data);


        response.json(discussion);
       

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};