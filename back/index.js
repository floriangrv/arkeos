require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

// required les différents routers
const articleRouter = require('./app/routers/articleRouter.js');
const marketRouter = require('./app/routers/marketRouter.js');
const userRouter = require('./app/routers/userRouter.js')

const port = process.env.PORT || 3000;

// pour le moment on autorise toute les entrées
app.use(cors('*'));

app.use(express.urlencoded({ extended: true }));

app.use('/articles', articleRouter);
app.use('/marketplace', marketRouter);
app.use('/members', userRouter);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});