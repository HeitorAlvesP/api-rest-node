const express = require('express');
const router = express.Router();
const openDb = require('../database/configDB');

let db;

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna pedidos'
    })
});

router.post('/', async (req, res, next) => {

    try {
        const pedido ={
            quantidade: req.body.quantidade,
            id_produto: req.body.id_produto
        }

        db = await openDb();
        const query = await db.run(
            "INSERT INTO pedidos (quantidade, id_produto) VALUES (?, ?)",
            [pedido.quantidade, pedido.id_produto]
        );

        res.status(201).send({
            mensagem: 'O pedido foi cirado',
            pedidoCriado: pedido
        });

    } catch (error) {
        console.error("❌ Erro ao criar pedido", error.message);
        res.status(500).send({
            mensagem: "Erro ao criar pedido",
            erro: error.message
        });
    }
});

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