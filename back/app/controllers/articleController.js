const ArticleModel = require('../models/articleModel');
const ArticleViewModel = require('../models/articleViewModel');

exports.getAllArticles = async (request, response, next) => {
    try {

        const articles = await ArticleViewModel.find();

        if(!articles){
            return next();
        }

        response.json(articles);
    } catch (error) {
        console.trace(error);
        response.status(500).json({ error: `Server error, please contact an administrator` });
    }

};