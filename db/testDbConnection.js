import mongoose from 'mongoose';

async function testConnection() {
    const mongodbUri = `mongodb://localhost:27017/your-database-name`; // Replace with your URI
    try {
        await mongoose.connect(mongodbUri, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            socketTimeoutMS: 45000,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    } finally {
        await mongoose.connection.close(); // Close the connection
    }
}

testConnection();
