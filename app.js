const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const hubRoutes = require('./routes/hubRoutes');
const requestRoutes = require('./routes/hubRoutes');

dotenv.config();
connectDB();


// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('api/users', userRoutes);
app.use('api/hubs', hubRoutes);
app.use('api/requests', requestRoutes);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

