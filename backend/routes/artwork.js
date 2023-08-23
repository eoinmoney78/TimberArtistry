const router = require('express').Router();
const { validateSession } = require('../middleware');
const Artwork = require('../models/Artwork');
const mongoose = require("mongoose");
const validateAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        console.error('Unauthorized access attempt by non-admin user:', req.user);
        res.status(403).json({ message: 'Forbidden: Admins only' });
    }
};

router.post('/', validateSession, validateAdmin, async (req, res) => {
    try {
        console.log("Attempt to save artwork with data:", req.body);

        const artwork = new Artwork(req.body);
        const savedArtwork = await artwork.save();

        console.log('Artwork successfully created:', savedArtwork);
        res.status(201).json(savedArtwork);
    } catch (error) {
        console.error('Error during artwork creation:', error);
        res.status(500).json({ message: 'Error creating artwork', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        console.log("Fetching all artworks...");

        const artworks = await Artwork.find();

        console.log('Successfully fetched artworks:', artworks);
        res.status(200).json(artworks);
    } catch (error) {
        console.error('Error during artworks fetch:', error);
        res.status(500).json({ message: 'Error fetching artworks', error: error.message });
    }
});

router.get('/:id', validateSession, async (req, res) => {
    try {
        console.log("Fetching artwork with ID:", req.params.id);

        const artwork = await Artwork.findById(req.params.id);

        if (!artwork) {
            console.warn('Artwork with ID', req.params.id, 'not found');
            return res.status(404).json({ message: 'Artwork not found' });
        }

        console.log('Successfully fetched artwork:', artwork);
        res.status(200).json(artwork);
    } catch (error) {
        console.error('Error fetching artwork with ID', req.params.id, ':', error);
        res.status(500).json({ message: 'Error fetching artwork', error: error.message });
    }
});

router.put('/:id', validateSession, validateAdmin, async (req, res) => {
    try {
        console.log("Updating artwork with ID:", req.params.id, "and data:", req.body);

        const updateData = { $set: req.body };
        const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, updateData, { new: true });


        if (!updatedArtwork) {
            console.warn('Attempt to update non-existent artwork with ID', req.params.id);
            return res.status(404).json({ message: 'Artwork not found' });
        }

        console.log('Successfully updated artwork:', updatedArtwork);
        res.status(200).json(updatedArtwork);
    } catch (error) {
        console.error('Error updating artwork with ID', req.params.id, ':', error);
        res.status(500).json({ message: 'Error updating artwork', error: error.message });
    }
});

router.delete('/:id', validateSession, validateAdmin, async (req, res) => {
    try {
        // Check if the provided ID is a valid MongoDB ObjectId format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        console.log("Received artwork ID for deletion:", req.params.id);

        const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id);

        if (!deletedArtwork) {
            console.warn('Attempt to delete non-existent artwork with ID', req.params.id);
            return res.status(404).json({ message: 'Artwork not found' });
        }

        console.log('Successfully deleted artwork:', deletedArtwork);
        res.status(200).json({ message: 'Artwork deleted' });
    } catch (error) {
        console.error('Error deleting artwork with ID', req.params.id, ':', error);
        res.status(500).json({ message: 'Error deleting artwork', error: error.message });
    }
});


module.exports = router;
