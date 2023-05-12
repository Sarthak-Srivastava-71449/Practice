const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const practice = new Schema({
    kalvium: [
        {
            course: {
                type: String,
                required: true,
            },
            courseId: {
                type: Number,
                required: true,
            },
            cohort: {
                type: Number,
                required: true,
            },
            college: {
                type: String,
                required: true,
            },
            semester: {
                type: Number,
                required: true,
            },
            averageRating: {
                type: Number,
                required: true,
            },
            studentsVoted: {
                type: Number,
                required: true,
            }
        }
    ]
})

module.exports = mongoose.model('schema', practice)