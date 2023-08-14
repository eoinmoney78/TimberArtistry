require('dotenv').config();

const express = require('express');

const app = express();
const cloudinary = require('./cloudinaryConfig');

const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

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


app.post('/image/upload', upload.single('image'), (req, res) => {
    // req.file is the 'image' file
    // req.body will hold the text fields, if there were any

    console.log('Request body:', req.body);
    console.log('Request file:', req.file);

    // Upload the image to Cloudinary
    cloudinary.uploader.upload(req.file.buffer, (error, result) => {
        if (error) {
            console.error('Upload error:', error);
            res.status(500).json({ message: 'Error uploading image to Cloudinary.' });
        } else {
            console.log('Upload result:', result);
            // You can save the Cloudinary URL (result.secure_url) to your database
            // or use it in any way you need in your application
            res.status(200).json({ message: 'Image uploaded successfully.' });
        }
    });
});

// Connection
const server = async () => {
    await connectToDatabase(); // Use the correct function name
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
};
server();
