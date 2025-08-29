module.exports = (req, res, query) => {
    const numero = parseFloat(query.numero);
    if (isNaN(numero)) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Número inválido');
    } else {
        const resultado = numero * 2;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`O dobro de ${numero} é ${resultado}.`);
    }
};