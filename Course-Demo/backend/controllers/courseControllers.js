const Course = require('../models/Course');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID' });
    }
};

// Create a new course
exports.createCourse = async (req, res) => {
    try {
        const { coursename, duration, department, joindate } = req.body;
        const newCourse = new Course({
            coursename,
            duration,
            department,
            joindate
        });
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

// Update a course
exports.updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
        res.json(updatedCourse);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data or ID' });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID' });
    }
};
