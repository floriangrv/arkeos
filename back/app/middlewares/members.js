// module for generate the tokens
const jwt = require('jsonwebtoken');

// generate the token

exports.generateAccessToken = (user) => {

    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
};

exports.authenticateToken = (request, response, next) => {

    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    console.log(token);

    if (token == null) return response.redirect('/articles');

    console.log("après le if");

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)
  
        if (err) return res.sendStatus(403)
  
        request.user = user
        console.log("je suis dans le middleware O_o");

        next()
    })
};