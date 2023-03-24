require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const mongoData = process.env.DATABASE_URL;
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express();

app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})