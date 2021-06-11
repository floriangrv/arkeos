const CoreModel = require('./coreModel');

class SpeciesModel extends CoreModel {

    static tableName = 'species';
    static fields = [
        'number',
        'genre',
        'species',
        'user_id'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = SpeciesModel;