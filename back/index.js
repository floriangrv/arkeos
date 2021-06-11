require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

// required les différents routers
const articleRouter = require('./app/routers/articleRouter.js');

const port = process.env.PORT || 3000;

// pour le moment on authorize toute les entrées
app.use(cors('*'));

app.use(express.urlencoded({ extended: true }));

app.use('/', articleRouter);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});