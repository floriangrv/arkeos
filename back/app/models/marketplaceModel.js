const CoreModel = require('./coreModel');

class MarketplaceModel extends CoreModel {

    static tableName = 'user';
    static fields = [
        'scientific_name',
        'locality',
        'phase',
        'born_captivity',
        'price',
        'native_country',
        'birth_date',
        'content',
        'author_id',
        'category_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = MarketplaceModel;