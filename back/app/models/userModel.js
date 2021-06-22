const CoreModel = require("./coreModel");
const client = require("../client");

class UserModel extends CoreModel {
  static tableName = "user";
  static fields = [
    "id",
    "username",
    "email",
    "password",
    "city",
    "country",
    "presentation",
    "profile_picture",
  ];

  constructor(obj) {
    super(obj);
  }

  static async addUser(data) {
    try {
      const result = await client.query(
        `INSERT INTO "${this.tableName}" 
            ("username", "email", "password") 
            VALUES
            ($1, $2, $3) RETURNING "username"`,
        [data.username, data.email, data.password]
      );

      if (result.rows[0]) {
        return "L'utilisateur a bien été crée !";
      } else {
        return "Erreur, l'utilisateur n'a pas pu être crée :/";
      }
    } catch (error) {
      console.trace(error);
    }
  }

  static async showData(data) {
    try {
      const result = await client.query(
        `SELECT "id", "password", "email" FROM "${this.tableName}" 
            WHERE "email" = $1`,
        [data.email]
      );

      if (result.rows[0]) {
        return result.rows[0];
      } else {
        return "Erreur, l'email ou mdp incorrect :/";
      }
    } catch (error) {
      console.trace(error);
    }
  }

  static async updateUser(obj) {
    try {
        const result = await client.query(`UPDATE "user" 
        SET "email"=$1, "city"=$2, "country"=$3, "presentation"=$4,"profile_picture"=$5  
        WHERE id=$6 RETURNING *`, 
        [obj.email, obj.city, obj.country, obj.presentation, obj.profile_picture, obj.id]);
        if (result.rows[0]) {
            return "The profile is updated";
        } else {
            return "Error, the profile is not updated";
        }
    } catch (error) {
        console.trace(error);
    }
}
}

module.exports = UserModel;
