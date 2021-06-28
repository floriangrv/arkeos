const CoreModel = require("./coreModel");
const client = require("../client");

class ChatViewModel extends CoreModel {

  static tableName = "chat_view";
  static fields = [
    "id",
    "content",
    "created_at",
    "receiver_id",
    "sender_id",
    "author"
  ];
  constructor(obj) {
    super(obj);
  }

  static async showConversation(id) {
    const result = await client.query(`SELECT "id", "content", "discussion_id", "receiver_id", "sender_id", "author",
    TO_CHAR("created_at", 'DD-MM-YYYY HH24:MI') "created_at"
    FROM ${this.tableName} 
    WHERE receiver_id = $1 AND sender_id = $2 
    OR sender_id = $3 AND receiver_id = $4`, 
    [id.receiver, id.sender, id.receiver, id.sender]);
    
    if (!result.rows[0]) {
        return null;
    }
    return result.rows;
  };

  static async showDiscussions(id) {
    console.log(id);
    const result = await client.query(`SELECT DISTINCT "chat_view"."receiver_id", "chat_view"."sender_id", 
    "chat_view"."discussion_id", "discussion"."delete_by"
    FROM ${this.tableName}
    FULL JOIN "discussion" ON "discussion"."id" = "chat_view"."id"
    WHERE receiver_id = $1 
    OR sender_id = $1`, 
    [id]);

    console.log(result.rows[0]);
    if (!result.rows[0]) {
        return null;
    }
    return result.rows;
  };

  
}
module.exports = ChatViewModel;
