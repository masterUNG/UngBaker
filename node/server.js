const express = require('express')

const app = express()

app.get('/', (req, res) => {res.end('Welcome to Root Path')})
app.get('/api', (req, res) => {res.end('This is API')})

app.listen(3000, () => {console.log('Server Node Working')})

