const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();


// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

