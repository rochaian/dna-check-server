import express from 'express';
import { mongodbConfig } from './configs/mongodbConfig';
import { router }  from './routes/api';
const cors = require('cors');

const app = express();
const PORT = 3000;

// Cors para acesso de origin *
app.use(cors());

app.use(express.json()); // Middleware para processar JSON

// Conecta ao MongoDB
mongodbConfig(); // Estabelece a conexão ao iniciar

// Usa as rotas da API
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
