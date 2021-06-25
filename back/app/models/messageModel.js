const CoreModel = require('./coreModel');
const client = require("../client");

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

    static async addConversation(obj) {
        const result = await client.query(`INSERT INTO ${this.tableName} ("content", "receiver_id", "sender_id") VALUES 
        ($1, $2, $3) RETURNING *`, 
        [obj.content, obj.receiver_id, obj.sender_id]);
    
        if (!result.rows[0]) {
            return null;
        }
        return result.rows[0];
      };
    
}

module.exports = MessageModel;