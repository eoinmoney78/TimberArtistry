require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const PORT = process.env.PORT || 5001;

const { connectToDatabase } = require('./middleware/db'); // Correct the path to middleware





app.use(express.json());
app.use('/static', express.static('public'));


app.use("/auth", authRoute);
app.use("/users", userRoute);

// Connection
const server = async () => {
    await connectToDatabase(); // Use the correct function name
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
};
server();
