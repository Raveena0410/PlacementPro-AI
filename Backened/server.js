require('dotenv').config();

const express = require('express');
const cors = require('cors');

const router = require('./route/router');
const connectDB = require('./config/config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

connectDB()
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(() => {
        console.log('Server not started because MongoDB connection failed');
    });