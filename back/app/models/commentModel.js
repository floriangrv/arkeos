const CoreModel = require('./coreModel');

class CommentModel extends CoreModel {

    static tableName = 'comment';
    static fields = [
        'content',
        'author_id',
        'article_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = CommentModel;