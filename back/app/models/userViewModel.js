const CoreModel = require('./coreModel');
const client = require('../client');

class UserViewModel extends CoreModel {

    static tableName = 'user_view';
    static fields = [
        'id',
        'username',
        'city',
        'country',
        'presentation',
        'profile_picture',
        'created_at',
        'id_market',
        'animal',
        'price',
        'number',
        'genre',
        'species',
        'name',
        'url_badge'
    ];

    constructor(obj){
        super(obj);
    }

    static async showAllMembers(options) {
        let result;
        if (options.search === undefined){
            result = await client.query(`
            SELECT "id", "username", "city", "country", "presentation", "profile_picture"
            FROM ${this.tableName} 
            GROUP BY "id", "username", "city", "country", "presentation", "profile_picture"
            ORDER BY $1 ASC LIMIT $2`, 
            [options.orderByFields, options.nbMembers]);
        } else {
            console.log(options.search);
            result = await client.query(`
            SELECT "id", "username", "city", "country", "presentation", "profile_picture" 
            FROM ${this.tableName} 
            WHERE "username" = $1  
            GROUP BY "id", "username", "city", "country", "presentation", "profile_picture"
            ORDER BY $2 ASC LIMIT $3`,
            [options.search, options.orderByFields, options.nbMembers]);
        }
        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }

        return instanceList;
    };

    static async showProfil(id) {
        const member = await client.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
        const listOfBadges = await client.query(`SELECT * FROM "user_badge_view" WHERE id = $1`, [id]);

        const result = [member.rows[0], listOfBadges.rows];
        if (!result) {
            return null;
        }
        return new this(result);
    };

};

module.exports = UserViewModel;