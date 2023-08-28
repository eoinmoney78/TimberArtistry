const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
        },
        datePosted: {
            type: Date,
            default: Date.now,
        },
        // Add any additional fields that pertain to a project here if needed
    }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
