const validate = {

    /**
     * Cette méthode est un factory de middleware
     * Elle sert à pouvoir récéptionner le schema (injection de dépendance)
     * @param {object} schema 
     * @returns {object} une function de middleware
     */
    queryString: (schema) => {

        // Cette fonction va decider si la route doit continuer vers le traitement, ou s'il est doit générer une erreur
        return async (request, response, next) => {
            try {
                // On va utiliser la méthode de validation de Joi
                // On lui fourni les données renvoyées sous forme de queryString
                // La méthode validate retourne : 
                // - une propriété value contenant les valeurs, mais on en a pas besoin
                // - un prorpiété error contenant la nature de l'erreur
    
                await schema.validateAsync(request.query);
                next();
            } catch (error) {
                    // Si j'ai une erreur on répond au client en lui fournissant l'erreur de validation
                    return response.status(400).json({ error: error.details[0].message });
            }
        }

    },

    body: (schema) => {

        return async (request, response, next) => {

            try {
              
                await schema.validateAsync(request.body);
                next();
            } catch (error) {
                return response.status(400).json({ error: error.details[0].message });
            }
        }

    },

    params: (schema) => {


        return async (request, response, next) => {
            try {
               
                await schema.validateAsync(request.params);
                next();
            } catch (error) {
                return response.status(400).json({ error: error.details[0].message });
            }
        }

    }

}

module.exports = validate;