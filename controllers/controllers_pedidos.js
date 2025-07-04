const openDb = require('../database/configDB');
let db;

async function criar_pedido (req, res, next){
        try {
        const pedido ={
            quantidade: req.body.quantidade,
            id_produto: req.body.id_produto
        }

        db = await openDb();

        const id_Produto = (await db.all("SELECT * FROM produtos")).map(p => p.id_produto);

        if(id_Produto.includes(pedido.id_produto)){
            const query = await db.run(
                "INSERT INTO pedidos (quantidade, id_produto) VALUES (?, ?)",
                [pedido.quantidade, pedido.id_produto]
            );
            res.status(201).send({
                mensagem: 'O pedido foi cirado',
                pedidoCriado: pedido
            });
        } else{
            res.status(417).send({
                mensagem: "Produto não foi encontrado"
            })
        }

    } catch (error) {
        console.error("❌ Erro ao criar pedido", error.message);
        res.status(500).send({
            mensagem: "Erro ao criar pedido",
            erro: error.message
        });
    }
}

module.exports = criar_pedido;