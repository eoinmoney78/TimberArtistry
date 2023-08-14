require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5001;

const { connectToDatabase } = require('./middleware/db'); // Correct the path to middleware

app.use(express.json());

// Connection
const server = async () => {
    await connectToDatabase(); // Use the correct function name
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
};
server();
