const CoreModel = require('./coreModel');

class ResponseModel extends CoreModel {

    static tableName = 'response';
    static fields = [
        'content',
        'author_id',
        'question_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = ResponseModel;