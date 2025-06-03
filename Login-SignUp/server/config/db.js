  const mongoose = require('mongoose');

const MongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(MongoUrl);
        console.log('✅ Database Connected Successfully!');
    } catch (error) {
        console.error('❌ Failed To connect MongoDB:', error.message);
    }
};

module.exports = connectDB;