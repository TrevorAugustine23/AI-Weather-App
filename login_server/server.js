//MongoDB
require('./db/index');

const app = require('express')();
const port = 8000;

const UserRouter = require('./api/User');

//For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user' , UserRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})