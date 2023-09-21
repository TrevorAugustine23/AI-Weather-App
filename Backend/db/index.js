const mongoose = require('mongoose');
mongoose
.connect("mongodb://127.0.0.1:27017/AI-Weather-App", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true  
})
.then(() => console.log("db is connected"))
.catch((err) => console.log(err));
