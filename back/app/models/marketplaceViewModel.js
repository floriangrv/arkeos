const CoreModel = require('./coreModel');

class MarketplaceViewModel extends CoreModel {

    static tableName = 'marketplace_view';
    static fields = [
        'id',
        'scientific_name',
        'locality',
        'phase',
        'born_captivity',
        'price',
        'native_country',
        'birth_date',
        'content',
        'created_at',
        'updated_at',
        'author',
        'category_name'
    ];

    constructor(obj){
        super(obj);
    }

};

module.exports = MarketplaceViewModel;