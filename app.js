const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProduto = require('./routes/produtos');
const rotaPedido = require('./routes/pedidos');

app.use(morgan('Dev'))
app.use('/produtos', rotaProduto);
app.use('/pedidos', rotaPedido);


module.exports = app;