const CoreModel = require('./coreModel');

class ThemeModel extends CoreModel {

    static tableName = 'theme';
    static fields = [
        'name',
        'color'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = ThemeModel;