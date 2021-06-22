const { 
    insertSchema: articleInsertSchema, 
    updateSchema: articleUpdateSchema
}  = require('./articleSchema');

const { 
    insertSchema: marketplaceInsertSchema, 
    updateSchema: marketplaceUpdateSchema
}  = require('./marketplaceSchema');

const { 
    insertSchema: userInsertSchema, 
    updateSchema: userUpdateSchema
}  = require('./userSchema');

module.exports = { articleInsertSchema, articleUpdateSchema, 
                    marketplaceInsertSchema, marketplaceUpdateSchema, 
                    userInsertSchema, userUpdateSchema 
                };