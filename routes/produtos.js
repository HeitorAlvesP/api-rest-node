const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST'
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


module.exports = router