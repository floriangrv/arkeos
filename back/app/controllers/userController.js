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
    //todoo prévoir le tri par plus ancien
    const data = request.body;
    console.log(data);

    let options = {};

    options.orderByFields = '"created_at"';

    // nombre de membres max à afficher pour le moment
    options.nbMembers = 20;


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

exports.searchMembers = async (request, response, next) => {
  try {
    const data = request.query;

    // Il nous faut la data.username, ou la data.city

    let options = {};

    if (data.username) {
      options.username = data.username;
    }
    if (data.city) {
      options.city = data.city;
    }
    //todoo reste le tri par plus anciens à inclure
    options.orderByFields = '"created_at"';

    // nombre de membres à afficher pour le moment
    options.nbMembers = 20;

    const members = await UserViewModel.searchMembers(options);

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

    const member = await UserViewModel.findByPk(id);

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

exports.updateUser = async (request, response, next) => {
  try {
      //todoo ajouter de la sécurité

      const id_user = parseInt(request.params.id, 10);

      // si c'est l'auteur qui demande la modification alors ok, sinon non

      const newValue = request.body;
      /*
        newValue.email 
        newValue.city 
        newValue.country 
        newValue.presentation
        newValue.profile_picture
                +
        id_user qui correspond à l'id du profil à modifier
      */

      newValue.id = id_user;

      const user = await userModel.updateUser(newValue);
      
      if(!user){
          return next();
      }
      
      response.status(200).json({user});

  } catch (error) {
      console.trace(error);
      response.status(500).json({ error: `Server error, please contact an administrator` });
  }
};

exports.deleteUser = async (request, response, next) => {
  try {
      //todoo ajouter de la sécurité
      const id_user = parseInt(request.params.id, 10);

      // si c'est l'user qui demande la suppression alors ok, sinon non

      const user = await UserModel.delete(id_user);
      
      if(!user){
          return next();
      }
      
      response.status(200).json({user});

  } catch (error) {
      console.trace(error);
      response.status(500).json({ error: `Server error, please contact an administrator` });
  }
};