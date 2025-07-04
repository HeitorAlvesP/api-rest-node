const express = require('express');
const router = express.Router();
const openDb = require('../database/configDB');
const criar_pedido = require('../controllers/controllers_pedidos');

let db;

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna pedidos'
    })
});

router.post('/', criar_pedido);

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: 'Detalhes do padido',
        id:id
    })
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    })
})


module.exports = router