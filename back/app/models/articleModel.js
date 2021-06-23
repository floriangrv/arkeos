const CoreModel = require('./coreModel');
const client = require('../client');

class ArticleModel extends CoreModel {

    static tableName = 'article';
    static fields = [
        'title',
        'content',
        'breeding_sheet',
        'author_id',
        'category_id',
        'theme_id'
    ];

    constructor(obj){
        super(obj);
    }
    
    static async addArticle(data) {
        try {
            const result = await client.query(`INSERT INTO "article" ("title", "content", "breeding_sheet", "author_id", "category_id", "theme_id") VALUES 
            ($1, $2, $3, $4, $5, $6) RETURNING *`, [data.title, data.content, data.breeding_sheet, data.author_id, data.category_id, data.theme_id]);
            if (result.rows[0]){
                return "L'article a bien été crée !";
            } else {
                return "Erreur, l'article n'a pas pu être crée :/";
            }
        } catch (error) {
            console.trace(error);
        }
    }
    
    static async updateArticle(obj) {
        try {
            const result = await client.query(`UPDATE "article" SET "title"=$1, "content"=$2, "category_id"=$3, "theme_id"=$4 WHERE id=$5 RETURNING *`, 
            [obj.title, obj.content, obj.category_id, obj.theme_id, obj.id]);
            if (result.rows[0]) {
                return result;
            } else {
                return "Erreur, cet article n'a pas pu être modifier !"
            }
        } catch (error) {
            console.trace(error);
        }
    }
}

module.exports = ArticleModel;