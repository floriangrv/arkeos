const ArticleModel = require('../models/articleModel');
const ArticleViewModel = require('../models/articleViewModel');

exports.getAllArticles = async (request, response, next) => {
    try {
        const data = request.body;

        console.log(data);

        let options = {};

        //todoo reste a coder le traitement de plusieurs categories
        if (data.category !== undefined && data.category !== 'false'){
            console.log("coucou");
            options.category = data.category;
        }

        //todoo reste a coder le traitement de plusieurs themes
        if (data.theme !== undefined && data.theme !== 'false'){
            options.theme = data.theme;
        }
        if ((data.date !== undefined && data.date !== 'false') && (data.rating === undefined || data.rating === 'false')){
            options.orderByFields = '"created_at"';
            options.order = data.date;
        }
        if ((data.rating !== undefined && data.rating !== 'false') && (data.date === undefined || data.date === 'false')){
            options.orderByFields = '"rating"';
            options.order = data.rating;
        }

        if (data.search !== undefined){
            options.search = data.search;
        }
        
        if (data.rating === 'false' && data.date === 'false' || data.rating === undefined && data.date === undefined) {
            options.orderByFields = '"created_at"';
            options.order = data.date;
        }

        // nombre d'article à afficher pour le moment
        options.nbArticles = 20;

        console.log("c'est les options", options);

        let articles;

        if (options.order === "DESC"){
            articles = await ArticleViewModel.findDesc(options);
        } else {
            articles = await ArticleViewModel.findAsc(options);
        }
       
        if(!articles){
            return next();
        }

        response.json(articles);
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }

};

exports.showArticle = async (request, response, next) => {
    try {
        const id = parseInt(request.params.id, 10);

        const article = await ArticleViewModel.showArticle(id);
        console.log(article);

        if(!article){
            return next();
        }
        //console.log(article);
        response.json(article);
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.addArticle = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const data = request.body;
        // Il me faut l'auteur, le titre de l'article, le contenu, le thème et ou catégorie

        /*
        data.title 
        data.content 
        data.author_id 
        data.category_id 
        data.theme_id
        */

        data.author_id = request.user;

        data.title = data.title.replace(/'/g, "''");
        data.content = data.content.replace(/'/g, "''");

        const article = await ArticleModel.addArticle(data);

        if(!article){
            return next();
        }

        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.deleteArticle = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const id_article = parseInt(request.params.id, 10);

        // Il me faut l'auteur, et l'id de l'article
        // si c'est l'auteur qui demande la suppression alors ok, sinon non

        if(author_id !== request.user){
            return next();
        }

        const article = await ArticleModel.delete(id_article);
        
        
        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};

exports.updateArticle = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const id_article = parseInt(request.params.id, 10);

        // Il me faut l'auteur, et l'id de l'article
        // si c'est l'auteur qui demande la modification alors ok, sinon non

        if(author_id !== request.user){
            return next();
        }
        
        const newValue = request.body;
        newValue.id = id_article;
        const article = await ArticleModel.updateArticle(newValue);
        
        
        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};