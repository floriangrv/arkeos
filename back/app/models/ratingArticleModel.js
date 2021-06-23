const CoreModel = require('./coreModel');

class RatingArticleModel extends CoreModel {

    static tableName = 'article_rating';
    static fields = [
        'article_id',
        'user_id',
        'rating'
    ];

    constructor(obj){
        super(obj);
    }

    static async findRating(data) {
        try {
            const result = await client.query(`SELECT * FROM "${this.tableName}"
                WHERE "article_id"=$1 AND "user_id"=$2 RETURNING *`, 
            [data.id_article, data.id_user]);

            if (result.rows[0]){
                return result.rows[0];
            } else {
                return false;
            }
        } catch (error) {
            console.trace(error);
        }
    }

    static async addRaiting(data) {
        try {
            const result = await client.query(`INSERT INTO "${this.tableName}" 
            ("${this.fields}") 
            VALUES
            ($1, $2, $3) RETURNING *`, 
            [data.id_article, data.id_user, data = {rating : 1}]);
            if (result.rows[0]){
                return "Le vote a bien été crée !";
            } else {
                return "Erreur, le vote n'a pas pu être crée :/";
            }
        } catch (error) {
            console.trace(error);
        }
    }


    static async deleteRating(obj) {
        try {
            const result = await client.query(`DELETE FROM "${this.tableName}" 
                WHERE "article_id"=$1 AND "user_id"=$2 RETURNING *`, 
                [obj.id_article, obj.id_user]);
            if (result.rows[0]) {
                return "Delete perform !";
            } else {
                return "Error, could not be deleted";
            }
        } catch (error) {
            console.trace(error);
        }
    }

}

module.exports = RatingArticleModel;