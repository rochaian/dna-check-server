import express from 'express';
import bodyParser from 'body-parser';
import { router as apiRouter } from './routes/api'; // Importa as rotas de API
const cors = require('cors');

const app = express();
const PORT = 3000;

// Cors para acesso de origin *
app.use(cors());

// Middleware para processar JSON
app.use(bodyParser.json());

// Usa as rotas do módulo de roteamento
app.use('/api', apiRouter); // Todas as rotas de API começam com /api

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
