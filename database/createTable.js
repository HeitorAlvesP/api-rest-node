async function createTables(db) {
    try {
        // Criação das tabelas
        await db.exec(`
            CREATE TABLE IF NOT EXISTS pedidos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                quantidade NUMBER NOT NULL,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS produtos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                preco REAL NOT NULL
            );
        `);

        console.log("✅ Tabelas criadas");
    } catch (error) {
        console.error("❌ Erro ao criar tabelas:", error.message);
        throw error; 
    }
};

module.exports = createTables;