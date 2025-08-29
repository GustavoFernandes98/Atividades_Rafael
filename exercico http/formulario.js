module.exports = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const params = new URLSearchParams(body);
        const valor = parseFloat(params.get('valor'));
        const moeda = params.get('moeda');
        let taxa = 0;
        let simbolo = '';

        if (moeda === 'USD') {
            taxa = 5;
            simbolo = 'USD';
        } else if (moeda === 'EUR') {
            taxa = 5.5;
            simbolo = 'EUR';
        }

        if (!valor || taxa === 0) {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Dados inválidos');
        } else {
            const convertido = (valor * taxa).toFixed(2);
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(`${valor} ${simbolo} equivalem a R$ ${convertido}`);
        }
    });
};