module.exports = (req, res, query) => {
    const nome = query.nome || 'Visitante';
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(`Olá, ${nome}! Seja bem-vindo.`);
};