const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tarefas = [];

// GET - Listar tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// POST - Criar tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;
  const novaTarefa = { id: Date.now(), titulo };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// PUT - Editar tarefa
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo } = req.body;
  const tarefa = tarefas.find(t => t.id == id);
  if (!tarefa) return res.status(404).send('Tarefa não encontrada');
  tarefa.titulo = titulo;
  res.json(tarefa);
});

// DELETE - Remover tarefa
app.delete('/tarefas/:id', (req, res) => {
  tarefas = tarefas.filter(t => t.id != req.params.id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});