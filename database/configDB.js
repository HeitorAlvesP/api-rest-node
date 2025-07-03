const sqlite3 = require('sqlite3'); //chama o sqlite
const { open } = require('sqlite'); //chama o metodo de abrir
const fs = require('fs'); //metodo interno que verifica o arquivo
const path = require('path');
const createTables = require('./createTable');

async function openDb() {
    const dbPath = './database/data/banco.db'

    try {
        const dbExists = fs.existsSync(path.resolve(dbPath));
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
    
        if (!dbExists) {
            console.log('Banco criado 📊')
            await createTables(db);
        }

        return db;
    } catch (error) {
        console.error('Erro:', error.message);
        throw error;
    }
}

module.exports = openDb;