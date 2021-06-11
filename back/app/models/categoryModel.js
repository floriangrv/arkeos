const CoreModel = require('./coreModel');

class CategoryModel extends CoreModel {

    static tableName = 'category';
    static fields = [
        'name'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = CategoryModel;