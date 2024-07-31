const express = require('express');
const app = express();

sequelize.sync();

const todoRouter = require('./routes/todo');

app.use('./todo', todoRouter)