const CoreModel = require('./coreModel');

class PhotoModel extends CoreModel {

    static tableName = 'photo';
    static fields = [
        'location',
        'url_picture',
        'article_id',
        'marketplace_id',
        'response_id',
        'question_id',
        'author_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = PhotoModel;