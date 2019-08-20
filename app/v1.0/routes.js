const router = require('express').Router();
const { getSongByID, getAllSongs, createSong, updateSong, deleteSong } = require('./routes.controller');

router.get('/:id', getSongByID);
router.get('/', getAllSongs);
router.post('/', createSong);
router.patch('/:id', updateSong);
router.delete('/:id', deleteSong);

module.exports = router;