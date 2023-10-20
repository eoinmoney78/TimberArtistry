

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

/**
 * Connects to the MongoDB instance using the given URI.
 */
const connectToDatabase = async () => {
    try {
        // Connection configurations
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        await mongoose.connect(MONGO_URI, options);
        console.log('Database Connected Successfully');
        handleMongooseEvents();

    } catch (error) {
        console.error('Error connecting to the database. Check your configurations and ensure MongoDB is running.');
        throw error;
    }
};

/**
 * Handles various mongoose connection events.
 */
const handleMongooseEvents = () => {
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected.');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected.');
    });

    mongoose.connection.on('error', () => {
        console.error('There was an error with the mongoose connection. Check logs for details.');
    });

    // Ensure mongoose connection closes when the application stops
    process.on('SIGINT', gracefullyExit);
    process.on('SIGTERM', gracefullyExit);
};

/**
 * Gracefully exits the application, ensuring DB connections are closed.
 */
const gracefullyExit = () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection closed. Exiting application.');
        process.exit(0);
    });
};

module.exports = { connectToDatabase, mongoose };
