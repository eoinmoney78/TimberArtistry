const router = require('express').Router();
const { validateSession } = require('../middleware');
const Project = require('../models/Project');
const JWT = process.env.JWT;

// CREATE a new project (requires authentication)
router.post('/', validateSession, async (req, res) => {
    try {
        const newProject = new Project({
            title: req.body.title,
            description: req.body.description,
            images: req.body.images,
            createdBy: req.user.id, // User ID from the validated JWT token
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Error creating project' });
    }
});

// READ all projects (no authentication required)
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('createdBy', 'username'); // Populate createdBy's username
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Error fetching projects' });
    }
});

// READ a specific project by ID (no authentication required)
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('createdBy', 'username'); // Populate createdBy's username
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Error fetching project' });
    }
});

// UPDATE a specific project by ID (requires authentication)
router.put('/:id', validateSession, async (req, res) => {
    try {
        // Check if the user is the creator of the project
        const project = await Project.findById(req.params.id);
        if (!project || project.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Error updating project' });
    }
});

// DELETE a specific project by ID (requires authentication)
router.delete('/:id', validateSession, async (req, res) => {
    try {
        // Check if the user is the creator of the project
        const project = await Project.findById(req.params.id);
        if (!project || project.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Error deleting project' });
    }
});

module.exports = router;
