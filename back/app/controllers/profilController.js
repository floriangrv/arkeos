const UserModel = require("../models/userModel");
const UserViewModel = require("../models/userViewModel");

exports.showProfil = async (request, response, next) => {
  try {

    console.log(request.user);

    profil_id = request.user;

    console.log("dans le shoprofil");
    console.log(profil_id);

    const member = await UserViewModel.findByPk(profil_id);

    console.log(member);

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
  
        const newValue = request.body;
        /*
          newValue.email 
          newValue.city 
          newValue.country 
          newValue.presentation
          newValue.profile_picture
                  +
          request.user qui correspond à l'id du profil à modifier
        */
  
        console.log(newValue);
        newValue.id = request.user;
  
        const user = await UserModel.updateUser(newValue);
  
        console.log(user);
        response.status(200).json({user});
  
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
  };
  
  exports.deleteUser = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité
        const id_user = request.user;
  
  
        const user = await UserModel.delete(id_user);
        
        
        response.status(200).json({user});
  
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
  };