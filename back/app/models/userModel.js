const CoreModel = require('./coreModel');

class UserModel extends CoreModel {

    static tableName = 'user';
    static fields = [
        'username',
        'email',
        'password',
        'city',
        'country',
        'presentation',
        'profile_picture'
    ];

    constructor(obj){
        super(obj);
    }

}

module.exports = UserModel;