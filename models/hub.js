const mongoose = require('mongoose');

const hubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

const Hub = mongoose.model('Hub', hubSchema);
