const UserModel = require("../models/userModel");

// middleware pour crée le token
const { generateAccessToken } = require("../middlewares/members");

// bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.getConnected = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const data = request.body;
    console.log(request.body);
    // Il me faut l' email, le password

    /*
        data.email
        data.password 
        */

    const hash = await UserModel.showData(data);

    bcrypt.compare(data.password, hash.password, async function (err, result) {
      if (!result) {
        return next();
      }

      const token = generateAccessToken({
        email: hash.email,
        password: hash.password,
      });

      response.status(200).json(token);
    });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};
