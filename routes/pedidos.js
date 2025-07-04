const express = require('express');
const router = express.Router();
const { criar_pedido, listar_pedido } = require('../controllers/controllers_pedidos');

router.get('/', listar_pedido);
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