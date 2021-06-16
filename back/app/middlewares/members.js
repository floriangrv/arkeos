// module for generate the tokens
const jwt = require('jsonwebtoken');

// generate the token

exports.generateAccessToken = (username) => {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
};

exports.authenticateToken = (request, response, next) => {
    console.log("dans le mimi");
    const authHeader = request.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    console.log(token);

    if (token == null) return response.redirect('/articles');

    console.log("bonjour bonjour !");

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)
  
        if (err) return res.sendStatus(403)
  
        request.user = user
        console.log("je suis dans le middleware O_o");

        next()
    })
};