const router = require('express').Router();
const { validateSession } = require('../middleware'); // Adjust the path to the validate-session module
const Blog = require('../models/Blog');
const jwt = require('jsonwebtoken');

// CREATE a new blog post (requires authentication)
router.post('/', validateSession, async (req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id, // User ID from the validated JWT token
        });

        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: 'Error creating blog post' });
    }
});

// READ all blog posts (no authentication required)
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username'); // Populate author's username
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ message: 'Error fetching blog posts' });
    }
});

// READ a specific blog post by ID (no authentication required)
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'username'); // Populate author's username
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ message: 'Error fetching blog post' });
    }
});

// UPDATE a specific blog post by ID (requires authentication)
router.put('/:id', validateSession, async (req, res) => {
    try {
        // Check if the user is the author of the blog post
        const blog = await Blog.findById(req.params.id);
        if (!blog || blog.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({ message: 'Error updating blog post' });
    }
});

// DELETE a specific blog post by ID (requires authentication)
router.delete('/:id', validateSession, async (req, res) => {
    try {
        // Check if the user is the author of the blog post
        const blog = await Blog.findById(req.params.id);
        if (!blog || blog.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json({ message: 'Blog post deleted' });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        res.status(500).json({ message: 'Error deleting blog post' });
    }
});

module.exports = router;
