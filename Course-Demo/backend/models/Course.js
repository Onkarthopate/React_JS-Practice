const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    coursename: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    joindate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Course', courseSchema);
