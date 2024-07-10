const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: String,
    album: String,
    song: String,
    length: Number,
    description: String
});

const SongModel = mongoose.model("Songs", SongSchema);
module.exports = SongModel;
