const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app =  express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use(express.json())
app.post('/api/user/create', (req,res) => {
    res.send(req.body)
})

app.listen(8000, () => {
    console.log(`app is running on port ${PORT}`)
})