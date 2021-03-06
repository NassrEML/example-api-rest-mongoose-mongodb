const SongModel = require('./routes.model');
const _UPDATE_DEFAULT_CONFIG = {
    new: true,
    runValidators: true
}

module.exports = {
    getSongByID, getAllSongs, createSong, updateSong, deleteSong
}

function getSongByID(req, res) {
    SongModel.findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function getAllSongs(req, res) {
    SongModel.find()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function createSong(req, res) {
    SongModel.create(req.body)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function updateSong(req, res) {
    SongModel.findByIdAndUpdate(req.params.id, req.body, _UPDATE_DEFAULT_CONFIG)
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function deleteSong(req, res) {
    SongModel.findById(req.params.id)
        .remove()
        .then(response => res.json(response))
        .catch((err) => handdleError(err, res))
}

function handdleError(err, res) {
    return res.status(400).json(err);
}