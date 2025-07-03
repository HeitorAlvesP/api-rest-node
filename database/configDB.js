const sqlite3 = require('sqlite3'); //chama o sqlite
const { open } = require('sqlite'); //chama o metodo de abrir

async function openDb() {
    return open({
        filename: './database/banco.db',
        driver: sqlite3.Database
    })
}

module.exports = openDb;