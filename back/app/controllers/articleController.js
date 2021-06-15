const ArticleModel = require('../models/articleModel');
const ArticleViewModel = require('../models/articleViewModel');

exports.getAllArticles = async (request, response, next) => {
    try {
        console.log(request.params);

        const data = request.params;

        data.nbArticles = parseInt( data.nbArticles, 10);
        if (data.nbArticles > 20){
            return next();
        }

        console.log(request.params);

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

        options.nbArticles = data.nbArticles;

        console.log("c'est les options", options);

        let articles;

        if (options.order === "DESC"){
            articles = await ArticleViewModel.findDesc(options);
        } else {
            articles = await ArticleViewModel.findAsc(options);
            console.log(articles);
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

exports.addArticle = async (request, response, next) => {
    try {
        //todoo ajouter de la sécurité

        const data = request.body;
        // Il me faut l'auteur, le titre de l'article, le contenu, le(s) thème(s) et ou catégorie(s)

        /*
        data.title 
        data.content 
        data.author_id 
        data.category_id 
        data.theme_id
        */

        data.title = data.title.replace(/'/g, '_');
        data.content = data.content.replace(/'/g, '_');

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

        const article = await ArticleModel.deleteArticle(id_article);
        
        if(!article){
            return next();
        }
        
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

        const newValue = request.body;
        newValue.id = id_article;
        const article = await ArticleModel.updateArticle(newValue);
        
        if(!article){
            return next();
        }
        
        response.status(200).json({article});

    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }
};