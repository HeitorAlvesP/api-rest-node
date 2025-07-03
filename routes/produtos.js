const express = require('express');
const router = express.Router();
const openDb = require('../database/configDB');


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET'
    })
});


router.post('/', async (req, res, next) => {

    let db;

    try {

        const produto = {
            nome: req.body.nome,   //o nome q conta para json 
            preco: req.body.preco //é o nome que está no body
        };

        db = await openDb();

        const result = await db.run(
          "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
          [produto.nome, produto.preco]
        );
        // const result = await openDb.run(query, [produto.nome, produto.preco]);

        res.status(201).send({
            mensagem: 'Inserir produto',
            produtoCriado: produto //Retornar o produto
        });

    } catch (error) {
        console.error("❌ Erro ao inserir produto:", error.message);
        res.status(500).send({
            mensagem: "Erro ao cadastrar produto.",
            erro: error.message
        });
    };
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