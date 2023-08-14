const cloudinary = require('cloudinary').v2;

cloudinary.config({
    CLOUD_NAME: 'YOUR_CLOUD_NAME',
    API_KEY: 'YOUR_API_KEY',
    API_SECRET: 'YOUR_API_SECRET'
});

module.exports = cloudinary;