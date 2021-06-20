const CoreModel = require("./coreModel");
const client = require("../client");
class UserViewModel extends CoreModel {

  static tableName = "user_view";
  static fields = [
    "id",
    "username",
    "city",
    "country",
    "presentation",
    "profile_picture",
    "created_at",
    "all_id_market",
    "all_animal_in_market",
    "all_price",
    "all_species_number",
    "all_genre",
    "all_species",
    "name",
    "all_url_badge",
  ];
  constructor(obj) {
    super(obj);
  }

  static async showAllMembers(options) {
    const result = await client.query(
      `
        SELECT *
        FROM ${this.tableName}
        ORDER BY $1 ASC LIMIT $2`,
      [options.orderByFields, options.nbMembers]
    );
    const instanceList = [];
    for (const row of result.rows) {
      instanceList.push(new this(row));
    }
    return instanceList;
  }

  static async searchMembers(options) {
    let result;
    if (options.username && options.city) {
      result = await client.query(
        `
            SELECT *
            FROM ${this.tableName}
            WHERE "username" LIKE '%' || $1 || '%' OR "city" LIKE '%' || $2 || '%'
            ORDER BY $3 ASC LIMIT $4`,
        [
          options.username,
          options.city,
          options.orderByFields,
          options.nbMembers,
        ]
      );
    } else if (options.username) {
      result = await client.query(
        `
            SELECT *
            FROM ${this.tableName}
            WHERE "username" LIKE '%' || $1 || '%'
            ORDER BY $2 ASC LIMIT $3`,
        [options.username, options.orderByFields, options.nbMembers]
      );
    } else if (options.city) {
      result = await client.query(
        `
            SELECT *
            FROM ${this.tableName}
            WHERE "city" LIKE '%' || $1 || '%'
            ORDER BY $2 ASC LIMIT $3`,
        [options.city, options.orderByFields, options.nbMembers]
      );
    } else {
      return { erreur: "Vous n'utiliser pas le bon input O_o" };
    }
    const instanceList = [];
    for (const row of result.rows) {
      instanceList.push(new this(row));
    }
    return instanceList;
  }

  static async showProfil(id) {
    const result = await client.query(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
  
    if (!result) {
      return null;
    }
    
    return new this(result.rows[0]);
  }
}
module.exports = UserViewModel;
