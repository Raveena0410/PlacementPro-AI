const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));




// Middleware
app.use(express.json());

// Routes
const router = require('./route/router');
app.use('/api', router);

// Connect MongoDB and start server
connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
    })
    .catch(() => {
        console.log('Server not started because MongoDB connection failed');
    });