require("dotenv").config();

const connectDB = require("./config/config");

connectDB();

console.log(`Server is running on port ${process.env.PORT}`);