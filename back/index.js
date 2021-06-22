require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");


// gestion des tokens
const jwt = require("jsonwebtoken");

// required les différents routers
const articleRouter = require("./app/routers/articleRouter.js");
const marketRouter = require("./app/routers/marketRouter.js");
const userRouter = require("./app/routers/userRouter.js");
const loginRouter = require("./app/routers/loginRouter.js");
const signinRouter = require("./app/routers/signinRouter.js");
const messageRouter = require("./app/routers/messageRouter");

const port = process.env.PORT || 3000;

// pour le moment on autorise toute les entrées
app.use(cors("*"));


app.use(express.json());

// tout les routers
app.use("/login", loginRouter);
app.use("/signin", signinRouter);
app.use("/articles", articleRouter);
app.use("/marketplace", marketRouter);
app.use("/membres", userRouter);
app.use("/messages", messageRouter);


app.listen(port, (_) => {
  console.log(`http://localhost:${port}`);
});
