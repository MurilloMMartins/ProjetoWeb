const mongoose = require('mongoose');

const vinylSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    cover_filename: {
        type: String,
        required: false,
    },
    audio_filename: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: true,
    },
    available_qty: {
        type: String,
        required: true,
    },
})

const VinylModel = mongoose.model("Vinyl", vinylSchema);

module.exports = VinylModel;
