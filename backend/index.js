


// Environment setup
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const crypto = require('crypto');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('./cloudinaryConfig');
const rateLimit = require('express-rate-limit');

// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const artworkRoute = require("./routes/artwork");
const projectRoute = require("./routes/project");

const { connectToDatabase } = require('./middleware/db');
const app = express();
const PORT = process.env.PORT || 5001;

// Trust proxy for rate-limiting if behind a reverse proxy (like Heroku, nginx)
app.set('trust proxy', 1);

// Set up rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,  // Maximum 100 requests per windowMs
    message: "Too many requests, please try again later."
});

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/static', express.static('public'));
app.use(apiLimiter); // Apply rate limiting

// Routes Middlewares
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/artwork", artworkRoute);
app.use("/project", projectRoute);

// Error Handler
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!');
});


app.get('/config', (req, res) => {
    res.json({
        cloudName: process.env.CLOUD_NAME
    });
});


const upload = multer({ dest: 'uploads/' });

app.post('/image/upload', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.buffer);
        res.status(200).json({ message: 'Image uploaded successfully.', url: result.secure_url });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading image.' });
    }
});

// Initialize server
const server = async () => {
    if (!process.env.JWT_SECRET) {
        const generatedSecret = crypto.randomBytes(32).toString('hex');
        console.warn(`JWT_SECRET is not set! For development, consider using: ${generatedSecret}. Set this as an environment variable in production.`);
    }

    await connectToDatabase();
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
};

server();
