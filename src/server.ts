import express from 'express';

const app = express(); // Cria uma instância do Express
const PORT = 3000; // Define a porta para o servidor

// Rota padrão para o servidor
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
