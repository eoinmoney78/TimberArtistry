require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const artworkRoute = require("./routes/artwork");
const projectRoute = require("./routes/project");
const blogRoute = require("./routes/blog");
const PORT = process.env.PORT || 5001;

const { connectToDatabase } = require('./middleware/db'); // Correct the path to middleware





app.use(express.json());
app.use('/static', express.static('public'));
app.use(cors());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/artwork", artworkRoute);
app.use("/project", projectRoute);
app.use("/blog", blogRoute);


// Connection
const server = async () => {
    await connectToDatabase(); // Use the correct function name
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
};
server();
