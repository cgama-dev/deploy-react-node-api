const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 5000;

app.use(cors())

app.get('/users', (req, res) => {
    const users = [{ nome: 'Cleyton Gama' }, { nome: 'Samantha' }, { nome: 'Luísa' }]
    res.json(users)
})

app.listen(port, () => console.log('Servidor ligado na porta 5000'))


