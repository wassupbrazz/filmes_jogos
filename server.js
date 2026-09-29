import express from 'express';

const servidor = express();
servidor.use(express.json());

const catalogo = []

servidor.get('/filmes', (req, res) => {
    res.send(catalogo);
});

servidor.post('/filmes', (req, res) => {
    catalogo.push(req.body);
    res.send('Filme cadastrado com sucesso!');
});


const Jogos = []

servidor.get('/jogos', (req, res) => {
    res.send(Jogos);
});

servidor.post('/jogos', (req, res) => {
    Jogos.push(req.body);
    res.send('Jogo cadastrado com sucesso!');
});

servidor.post('/jogos', (req, res) => {
    Jogos.push(req.body);
    res.send('Jogo cadastrado com sucesso!');
});










servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});