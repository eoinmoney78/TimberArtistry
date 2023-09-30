const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrls: [{  // Updated from imageUrl to imageUrls and made it an array of strings.
            type: String,
            required: false,
        }],
        category: {
            type: String,
            enum: ['Painting', 'Sculpture', 'Photography', 'Other', 'Wood piece'],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
    }
);

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
