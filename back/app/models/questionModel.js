const CoreModel = require('./coreModel');

class QuestionModel extends CoreModel {

    static tableName = 'question';
    static fields = [
        'title',
        'content',
        'author_id',
        'theme_id',
        'category_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = QuestionModel;