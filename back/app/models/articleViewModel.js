const client = require('../client');
const CoreModel = require('./coreModel');

class ArticleViewModel extends CoreModel {

    static tableName = 'article_without_breeder';
    static fields = [
        'title',
        'content',
        'author',
        'theme_name',
        'theme_color',
        'category_name'
    ];

    constructor(obj){
        super(obj);
    }

};

module.exports = ArticleViewModel;