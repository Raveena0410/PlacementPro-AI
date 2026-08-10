const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('MongoDB connected');
        })
        .catch((err) => {
            console.log('MongoDB connection error:', err.message);
            throw err;
        });
};

module.exports = connectDB;