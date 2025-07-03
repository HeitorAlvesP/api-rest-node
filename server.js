const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const openDb = require('./database/configDB');
openDb()
    .then(() => {
        console.log('🟢 Banco de dados iniciado');
    })
    .catch((error) => {
        console.error('🔴 Falha ao iniciar a aplicação:', error);
    });

server.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
});