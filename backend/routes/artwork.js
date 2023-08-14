const router = require('express').Router();
const { validateSession } = require('../middleware');
const Artwork = require('../models/Artwork');

// CREATE a new artwork
router.post('/', validateSession, async (req, res) => {
    try {
        const artwork = new Artwork(req.body);
        const savedArtwork = await artwork.save();
        console.log('Artwork created:', savedArtwork);
        res.status(201).json(savedArtwork);
    } catch (error) {
        console.error('Error creating artwork:', error);
        res.status(500).json({ message: 'Error creating artwork', error: error.message });
    }
});

// READ all artworks (no authentication required)
router.get('/', async (req, res) => {
    try {
        const artworks = await Artwork.find();
        console.log('Artworks fetched:', artworks);
        res.status(200).json(artworks);
    } catch (error) {
        console.error('Error fetching artworks:', error);
        res.status(500).json({ message: 'Error fetching artworks', error: error.message });
    }
});

// READ a specific artwork by ID (requires authentication)
router.get('/:id', validateSession, async (req, res) => {
    try {
        const artwork = await Artwork.findById(req.params.id);
        if (!artwork) {
            console.log('Artwork not found');
            return res.status(404).json({ message: 'Artwork not found' });
        }
        console.log('Artwork fetched:', artwork);
        res.status(200).json(artwork);
    } catch (error) {
        console.error('Error fetching artwork:', error);
        res.status(500).json({ message: 'Error fetching artwork', error: error.message });
    }
});

// UPDATE a specific artwork by ID (requires authentication)
router.put('/:id', validateSession, async (req, res) => {
    try {
        const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedArtwork) {
            console.log('Artwork not found');
            return res.status(404).json({ message: 'Artwork not found' });
        }
        console.log('Artwork updated:', updatedArtwork);
        res.status(200).json(updatedArtwork);
    } catch (error) {
        console.error('Error updating artwork:', error);
        res.status(500).json({ message: 'Error updating artwork', error: error.message });
    }
});

// DELETE a specific artwork by ID (requires authentication)
router.delete('/:id', validateSession, async (req, res) => {
    try {
        const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id);
        if (!deletedArtwork) {
            console.log('Artwork not found');
            return res.status(404).json({ message: 'Artwork not found' });
        }
        console.log('Artwork deleted:', deletedArtwork);
        res.status(200).json({ message: 'Artwork deleted' });
    } catch (error) {
        console.error('Error deleting artwork:', error);
        res.status(500).json({ message: 'Error deleting artwork', error: error.message });
    }
});

module.exports = router;
