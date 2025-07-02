const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET'
    })
});


router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,   //o nome q conta para json 
        preco: req.body.preco //é o nome que está no body
    }

    res.status(201).send({
        mensagem: 'Inserir produto',
        produtoCriado: produto //Retornar o produto
    })
});


router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if(id === 'especial'){
        res.status(200).send({
        mensagem: 'Id especial',
        id:id
    })
    }else{
        res.status(200).send({
        mensagem: 'ID unico',
        id:id
    })
    }
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Aqui rota pacth'
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Aqui rota Delet'
    })
})


module.exports = router