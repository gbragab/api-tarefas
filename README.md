# 📌 API de Tarefas (Node.js + Express)

Este projeto é uma API REST simples feita com Node.js e Express, para gerenciamento de tarefas (to-do list). Ele foi criado com fins de estudo e prática em back-end.

---

## ✅ Funcionalidades

A API permite:

- ✅ Criar tarefas (`POST /tarefas`)
- 📋 Listar todas as tarefas (`GET /tarefas`)
- ✏️ Editar uma tarefa (`PUT /tarefas/:id`)
- 🗑️ Deletar uma tarefa (`DELETE /tarefas/:id`)

---

## 💡 Exemplo de requisição

### Criar tarefa (POST)

POST http://localhost:3000/tarefas
Content-Type: application/json

{
"titulo": "Estudar Node.js"
}
---

## ▶️ Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/gbragab/api-tarefas.git
cd api-tarefas
npm install
node index.js