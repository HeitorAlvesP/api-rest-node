const express = require('express');
const app = express();

const rotaProduto = require('./routes/produtos');

app.use('/produtos', rotaProduto);


module.exports = app;