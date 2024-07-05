const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/sobre', (req, res) => {
  res.send('Esta é a página sobre');
});

app.get('/tarefas', (req, res) => {
  const tarefasPath = path.join(__dirname, 'public', 'tarefas.json');
  
  fs.readFile(tarefasPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o arquivo de tarefas.');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});


  