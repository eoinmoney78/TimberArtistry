
const router = require('express').Router();
const { validateSession } = require('../middleware');
const Artwork = require('../models/Artwork');
const mongoose = require("mongoose");

const validateAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next();
    }
    res.status(403).json({ message: 'Forbidden: Admins only' });
};

router.post('/', validateSession, validateAdmin, async (req, res) => {
    try {
        const artwork = new Artwork(req.body);
        const savedArtwork = await artwork.save();
        res.status(201).json(savedArtwork);
    } catch (error) {
        res.status(500).json({ message: 'Error creating artwork' });
    }
});

router.get('/', async (req, res) => {
    try {
        const artworks = await Artwork.find();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching artworks' });
    }
});

router.get('/:id', validateSession, async (req, res) => {
    try {
        const artwork = await Artwork.findById(req.params.id);
        if (!artwork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.status(200).json(artwork);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching artwork' });
    }
});

router.put('/:id', validateSession, validateAdmin, async (req, res) => {
    try {
        const updateData = { $set: req.body };
        const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedArtwork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.status(200).json(updatedArtwork);
    } catch (error) {
        res.status(500).json({ message: 'Error updating artwork' });
    }
});

router.delete('/:id', validateSession, validateAdmin, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id);

        if (!deletedArtwork) {
            return res.status(404).json({ message: 'Artwork not found' });
        }
        res.status(200).json({ message: 'Artwork deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting artwork' });
    }
});

module.exports = router;
