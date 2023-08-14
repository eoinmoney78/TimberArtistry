const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;

const connectToDatabase = async () => {
    try {
        // Set useNewUrlParser and useUnifiedTopology options
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

// Expose the connectToDatabase function and the mongoose object
module.exports = { connectToDatabase, mongoose };
