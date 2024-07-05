const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json()); 


app.get('/tarefas', (req, res) => {
    res.json([
        { id: 1, tarefa: 'Estudar Node.js' },
        { id: 2, tarefa: 'Fazer exercícios' }
    ]);
});


app.post('/novaTarefa', (req, res) => {
    const novaTarefa = req.body;
    console.log('Nova tarefa recebida:', novaTarefa);

   
    res.status(200).json({ message: 'Tarefa recebida com sucesso!', tarefa: novaTarefa });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

