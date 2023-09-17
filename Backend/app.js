const express = require('express')
require("dotenv").config();
require('./db')
const req = require('express/lib/request')
const res = require('express/lib/response')

const userRouter = require('./routes/user')
const app =  express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use(express.json())
app.use('/api/user', userRouter)

app.listen(8000, () => {
    console.log(`app is running on port ${PORT}`)
})