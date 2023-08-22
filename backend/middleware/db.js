

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

        // Add listeners to handle events
        handleMongooseEvents();

    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

/**
 * Handles various mongoose connection events.
 */
const handleMongooseEvents = () => {
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to the database.');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected from the database.');
    });

    mongoose.connection.on('error', (error) => {
        console.error('There was an error with the mongoose connection:', error);
    });

    // Ensure mongoose connection closes when the application stops
    process.on('SIGINT', () => {
        mongoose.connection.close();
        console.log('Mongoose connection closed due to application termination.');
        process.exit(0);
    });

};

// Expose the connectToDatabase function and the mongoose object
module.exports = { connectToDatabase, mongoose };
