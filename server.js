import express from 'express';

const servidor = express();
servidor.use(express.json());

const catalogo = []

servidor.get('/filmes', (req, res) => {
    res.send('Catalogo de Filmes');
});

servidor.post('/filmes', (req, res) => {
    catalogo.push(req.body);
    res.send('Filme cadastrado com sucesso!');
});

servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

const Jogos = []

servidor.get('/jogos', (req, res) => {
    res.send('Catalogo de Jogos');
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