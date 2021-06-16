const UserModel = require('../models/userModel');
const UserViewModel = require('../models/userViewModel');

exports.showAllMembers = async (request, response, next) => {
    try {
        const data = request.body;

        console.log(data);

        let options = {};

        options.orderByFields = '"created_at"';

        if (data.search !== undefined){
            options.search = data.search;
        }

        // nombre de membres à afficher pour le moment
        options.nbMembers = 20;

        //todoo reste à prendre en charge la recherche par ville
        const members = await UserViewModel.showAllMembers(options);
       
        if(!members){
            return next();
        }

        response.json(members);
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }

};

exports.showMember = async (request, response, next) => {
    try {
        const id = parseInt(request.params.id, 10);

        if (isNaN(id)){
            return next();
        }

        const member = await UserViewModel.showProfil(id);

        if(!member){
            return next();
        }

        response.json(member);
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.addMarket = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const data = request.body;
        // Il me faut l'auteur, le titre de l'article, le contenu, le(s) thème(s) et ou catégorie(s)

        /*
        data.scientific_name
        data.locality
        data.phase 
        data.born_captivity 
        data.price
        data.native_country
        data.birth_date
        data.content

        data.created_at
        data.updated_at
        data.author
        data.category_name
        */

       // je remplace les virgule par des points, afin de ne pas avoir d'erreur dans la base
       data.price = data.price.replace(/,/g, '.');
    
        const article = await MarketplaceModel.addMarket(data);

        if(!article){
            return next();
        }

        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.updateMarket = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const id_article = parseInt(request.params.id, 10);

        // Il me faut l'auteur, et l'id de l'article
        // si c'est l'auteur qui demande la modification alors ok, sinon non

        
        const newValue = request.body;
        // je stock l'id de l'article
        newValue.id = id_article;
        // je remplace les virgule par des points, afin de ne pas avoir d'erreur dans la base
        newValue.price = newValue.price.replace(/,/g, '.');

        const article = await MarketplaceModel.updateMarket(newValue);

        if(!article){
            return next();
        }
        
        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.deleteMarket = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const id_article = parseInt(request.params.id, 10);

        // Il me faut l'auteur, et l'id de l'article
        // si c'est l'auteur qui demande la suppression alors ok, sinon non

        const article = await MarketplaceModel.delete(id_article);
        
        if(!article){
            return next();
        }
        
        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};