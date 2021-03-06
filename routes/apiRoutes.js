// LOAD DATA
let notes = require("../db/db.json");

// Routing
module.exports = function (app) {

    // GET NOTES
    app.get("/api/notes", function (req, res) {
        res.json(notes)
    })

    // GET SINGLE NOTE
    app.get("/api/notes/:id", function (req, res) {
        const found = notes.some(note => note.id === parseInt(req.params.id));

        if (found) {
            res.json(notes.filter(note => note.id === parseInt(req.params.id)));
        }
        else {
            res.json({ msg: `no note with the id of ${req.params.id}` });
        }
    })

    // API Post 
    app.post("/api/notes", function (req, res) {


        for (var i = 0; i < notes.length; i++) {
            var newId = notes.length
        }

        const newNote = {
            id: newId,
            title: req.body.title,
            text: req.body.text,

        }

        if (!newNote.title || !newNote.text) {
            return res.json({ msg: "please include a title and text" });

        }

        notes.push(newNote);
        res.json(newNote);
    })

    // Delete note
    app.delete("/api/notes/:id", function (req, res) {
        const found = notes.some(note => note.id === parseInt(req.params.id));

        if (found) {
            res.json({
                msg: "Note deleted",
                notes: notes.filter(note => note.id !== parseInt(req.params.id))
            })
        }
        else {
            res.json({ msg: `No note with the id of ${req.params.id}` })
        }
    });

}