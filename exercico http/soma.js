module.exports = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const params = new URLSearchParams(body);
        const a = parseFloat(params.get('a'));
        const b = parseFloat(params.get('b'));

        if (isNaN(a) || isNaN(b)) {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Números inválidos');
        } else {
            const resultado = a + b;
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`A soma de ${a} + ${b} é ${resultado}.`);
        }
    });
};