const CoreModel = require('./coreModel');

class ArticleModel extends CoreModel {

    static tableName = 'article';
    static fields = [
        'title',
        'content',
        'breeding_sheet',
        'author_id',
        'category_id',
        'theme_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = ArticleModel;