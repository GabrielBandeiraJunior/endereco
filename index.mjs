import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.json());

app.get('/endereco/:cep', async (req, res) => {
    const { cep } = req.params;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o endereço.' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
