const express = require('express')
require('./db')
const req = require('express/lib/request')
const res = require('express/lib/response')
const User = require('./model/user')

const app =  express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use(express.json())
app.post('/api/user/create', (req,res) => {
    const {Uname, email, password} = req.body
    const newUser=  new User({
        Uname,
        email,
        password
    })

    res.send(newUser)
})

app.listen(8000, () => {
    console.log(`app is running on port ${PORT}`)
})