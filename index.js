require('dotenv').config()
const express = require ('express')
const { cadastroVoluntario } = require('./src/controladores/cadastro')
const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json())

app.post('/',cadastroVoluntario)
app.listen(3001)
