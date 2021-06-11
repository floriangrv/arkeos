const CoreModel = require('./coreModel');

class MessageModel extends CoreModel {

    static tableName = 'message';
    static fields = [
        'content',
        'receiver_id',
        'sender_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = MessageModel;