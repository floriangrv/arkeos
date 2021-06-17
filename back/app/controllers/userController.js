const UserModel = require("../models/userModel");
const UserViewModel = require("../models/userViewModel");

// bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.addMember = async (request, response, next) => {
  try {
    //todoo ajouter de la sécurité

    const data = request.body;
    // Il me faut l'pseudo, l' email, le password

    /*
        data.pseudo
        data.email
        data.password 
        */

    console.log(data);

    bcrypt.hash(data.password, saltRounds, async function (err, hash) {
      data.password = hash;
      const member = await UserModel.addUser(data);

      if (!member) {
        return next();
      }

      response.status(200).json({ member });
    });
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.showAllMembers = async (request, response, next) => {
  try {
    const data = request.body;

    console.log(data);

    let options = {};

    options.orderByFields = '"created_at"';

    if (data.search !== undefined) {
      options.search = data.search;
    }

    // nombre de membres à afficher pour le moment
    options.nbMembers = 20;

    //todoo reste à prendre en charge la recherche par ville
    const members = await UserViewModel.showAllMembers(options);

    if (!members) {
      return next();
    }

    response.json(members);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

exports.showMember = async (request, response, next) => {
  try {
    const id = parseInt(request.params.id, 10);

    if (isNaN(id)) {
      return next();
    }

    const member = await UserViewModel.showProfil(id);

    if (!member) {
      return next();
    }

    response.json(member);
  } catch (error) {
    console.trace(error);
    response
      .status(500)
      .json({ error: `Server error, please contact an administrator` });
  }
};

//todoo je dois ajouter le fait de pouvoir modifier son profil

//todoo je dois ajouter la possibilité de supprimer un compte
