const mongoose = require('mongoose');
const coordinateSchema = new mongoose.Schema({
    longitude:{
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    altitude: {
        type: Number
    },
    accuracy: {
        type: Number
    },
    speed: {
        type: Number
    },    
})

module.exports = mongoose.model('Coordinates', coordinateSchema)
