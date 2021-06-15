const CoreModel = require('./coreModel');

class BadgeModel extends CoreModel {

    static tableName = 'badge';
    static fields = [
        'name',
        'picture'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = BadgeModel;