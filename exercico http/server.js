const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const saudacao = require('./rotas/saudacao');
const dobro = require('./rotas/dobro');
const formulario = require('./rotas/formulario');
const soma = require('./rotas/soma');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const pathname = parsedUrl.pathname;

    if (pathname === '/' && method === 'GET') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Erro ao carregar index.html');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } 
    else if (pathname === '/saudacao' && method === 'GET') {
        saudacao(req, res, parsedUrl.query);
    } 
    else if (pathname === '/dobro' && method === 'GET') {
        dobro(req, res, parsedUrl.query);
    } 
    else if (pathname === '/formulario' && method === 'POST') {
        formulario(req, res);
    } 
    else if (pathname === '/soma' && method === 'POST') {
        soma(req, res);
    } 
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Rota não encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});