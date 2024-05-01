require('dotenv').config()
const express = require ('express')
const cors = require('cors')

const { cadastroVoluntario } = require('./src/controladores/cadastro')
const app = express()

app.use(cors({
  origin: '*'
}));


app.use(express.json())

app.post('/',cadastroVoluntario)
app.listen(3001)
