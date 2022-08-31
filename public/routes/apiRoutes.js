const router = require("express").Router();
const store = require("../../db/storage");

// GET "/api/notes" responds with all notes from the database
router.get("api/notes", function(req, res) {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("api/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("api/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
