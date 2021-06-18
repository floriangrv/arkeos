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
    "id_market",
    "animal",
    "price",
    "number",
    "genre",
    "species",
    "name",
    "url_badge",
  ];
  constructor(obj) {
    super(obj);
  }
  static async showAllMembers(options) {
    const result = await client.query(
      `
        SELECT "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
        FROM ${this.tableName}
        GROUP BY "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
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
            SELECT "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
            FROM ${this.tableName}
            WHERE "username" LIKE '%' || $1 || '%' OR "city" LIKE '%' || $2 || '%'
            GROUP BY "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
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
            SELECT "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
            FROM ${this.tableName}
            WHERE "username" LIKE '%' || $1 || '%'
            GROUP BY "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
            ORDER BY $2 ASC LIMIT $3`,
        [options.username, options.orderByFields, options.nbMembers]
      );
    } else if (options.city) {
      result = await client.query(
        `
            SELECT "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
            FROM ${this.tableName}
            WHERE "city" LIKE '%' || $1 || '%'
            GROUP BY "id", "username", "city", "country", "presentation", "profile_picture", "genre", "species"
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
    const member = await client.query(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    const listOfBadges = await client.query(
      `SELECT * FROM "user_badge_view" WHERE id = $1`,
      [id]
    );
    const result = [member.rows[0], listOfBadges.rows];
    if (!result) {
      return null;
    }
    return new this(result);
  }
}
module.exports = UserViewModel;
