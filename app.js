const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const openDb = require('./database/configDB');
openDb();

const rotaProduto = require('./routes/produtos');
const rotaPedido = require('./routes/pedidos');

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*'); //permição na qual vai no link
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-With, Content-type, Accept, Authorization'
    ); //tipo de cabeçalhos q aceita

    if(req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'PUT, POS, PATCH, DELETE, GET');
        return res.status(200).send({});
    } //metodos que aceita

    next();
})

app.use(morgan('dev')); //biblioteca para dev -- info terminal
app.use(bodyParser.urlencoded({extended: false})); //dados simples somente
app.use(bodyParser.json());  //aceita só json

app.use('/produtos', rotaProduto);
app.use('/pedidos', rotaPedido);

app.use((req, res, next) => { //se não cair em rota alguma ou não passar rota cai aqui
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