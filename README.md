<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Atividade AD3 de Programação Web</title>
</head>
<body>

<h1>Atividade AD3 de Programação Web</h1>

<p>Este repositório contém a implementação da aplicação de exemplo conforme os tópicos apresentados na Unidade 3 do curso de Programação Web.</p>

<h2>Descrição</h2>
<p>A aplicação desenvolvida é um simples servidor web utilizando Node.js e Express, que gerencia uma lista de tarefas. A estrutura do projeto inclui:</p>
<ul>
  <li>Uma rota principal que retorna uma mensagem de boas-vindas.</li>
  <li>Uma rota '/sobre' que retorna informações sobre a aplicação.</li>
  <li>Uma rota '/tarefas' que retorna uma lista de tarefas a partir de um arquivo JSON.</li>
  <li>Uma rota '/novaTarefa' que permite enviar uma nova tarefa para o servidor utilizando o método POST.</li>
</ul>

<h2>Estrutura do Projeto</h2>
<pre>
/seu-projeto
  ├── /node_modules
  ├── /public
  │   └── tarefas.json
  ├── index.js
  ├── package.json
  ├── package-lock.json
  ├── README.md
  ├── main.js
  ├── index.html
  └── styles.css
</pre>

<h2>Configuração e Execução</h2>
<p>Siga os passos abaixo para configurar e executar a aplicação:</p>
<ol>
  <li>Clone o repositório para o seu ambiente local:</li>
  <pre><code>git clone https://github.com/FerEnnes/Programacaoweb.git</code></pre>
  <li>Instale as dependências do projeto:</li>
  <pre><code>npm install</code></pre>
  <li>Inicie o servidor:</li>
  <pre><code>node index.js</code></pre>
  <li>Acesse a aplicação em <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li>
</ol>

<h2>Exemplos de Uso</h2>
<ul>
  <li><strong>Rota Principal:</strong> <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a></li>
  <li><strong>Rota Sobre:</strong> <a href="http://localhost:3000/sobre" target="_blank">http://localhost:3000/sobre</a></li>
  <li><strong>Rota Tarefas:</strong> <a href="http://localhost:3000/tarefas" target="_blank">http://localhost:3000/tarefas</a></li>
  <li><strong>Rota Nova Tarefa:</strong> Use o formulário na página principal para enviar uma nova tarefa via POST para <code>http://localhost:3000/novaTarefa</code></li>
</ul>

<h2>Funcionalidade de Envio de Tarefas com POST</h2>
<p>Para enviar uma nova tarefa para o servidor, a aplicação inclui um formulário no arquivo <code>index.html</code> que utiliza JavaScript para fazer uma requisição POST para a rota <code>/novaTarefa</code>.</p>

<h3>Arquivo <code>main.js</code></h3>
<pre><code>
function enviarNovaTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');

    fetch('http://localhost:3000/novaTarefa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "descricao": inputTarefa.value })
    })
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
    });
}

document.getElementById('enviarTarefaBtn').addEventListener('click', enviarNovaTarefa);
</code></pre>

<h3>Arquivo <code>index.js</code></h3>
<pre><code>
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json()); // Middleware para parsear o corpo das requisições

// Rota GET para obter as tarefas
app.get('/tarefas', (req, res) => {
    res.json([
        { id: 1, tarefa: 'Estudar Node.js' },
        { id: 2, tarefa: 'Fazer exercícios' }
    ]);
});

// Rota POST para adicionar uma nova tarefa
app.post('/novaTarefa', (req, res) => {
    const novaTarefa = req.body;
    console.log('Nova tarefa recebida:', novaTarefa);

    // Aqui você pode adicionar a lógica para salvar a tarefa em um banco de dados, por exemplo

    res.status(200).json({ message: 'Tarefa recebida com sucesso!', tarefa: novaTarefa });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
</code></pre>

<h3>Arquivo <code>index.html</code></h3>
<pre><code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar Tarefa</title>
</head>
<body>
    <h1>Enviar Tarefa</h1>
    <input type="text" id="inputTarefa" placeholder="Digite a tarefa">
    <button id="enviarTarefaBtn">Enviar Tarefa</button>
    <script src="main.js"></script>
</body>
</html>
</code></pre>

</body>
</html>



