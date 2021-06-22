// module for generate the tokens
const jwt = require("jsonwebtoken");

// generate the token

exports.generateAccessToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "5000s" });
};

exports.authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader;

  if (token == null) return response.json("Error: not connected");

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

    if (err) return res.sendStatus(403);

    request.user = user.id;

    next();
  });
};
