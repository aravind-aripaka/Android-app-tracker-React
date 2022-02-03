require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('connected to database')) 

app.use((req, res, next) => {
    //console.log('Time:', Date.now());  
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

const coordinatesRouter = require('./routes/coordinates')
app.use('/coordinates', coordinatesRouter)
 
app.listen(5000, () => console.log('server started'));
