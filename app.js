const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotaProduto = require('./routes/produtos');
const rotaPedido = require('./routes/pedidos');

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-With, Content-type, Accept, Authorization'
    )
})

app.use(morgan('dev')); //biblioteca para dev -- info terminal
app.use(bodyParser.urlencoded({extended: false})); //dados simples somente
app.use(bodyParser.json());  //aceita só json

app.use('/produtos', rotaProduto);
app.use('/pedidos', rotaPedido);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
        erro.status = 404;
        next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;