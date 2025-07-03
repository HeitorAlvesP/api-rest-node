async function createTables(db) {
    try {
        await db.exec(`

            CREATE TABLE IF NOT EXISTS produtos (
                id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
                nome VARCHAR(45) NOT NULL,
                preco FLOAT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS pedidos (
                id_produto INTEGER NOT NULL,
                id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
                quantidade INT NOT NULL,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            INSERT INTO produtos (nome, preco)
            VALUES ('Teste_1', 99.90);

        `);

        console.log("✅ Tabelas criadas");
    } catch (error) {
        console.error("❌ Erro ao criar tabelas:", error.message);
        throw error; 
    }
};

module.exports = createTables;