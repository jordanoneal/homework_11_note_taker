//LOAD DATA
let notes = require("../db/db.json");
console.log(notes);

// routing

module.exports = function(app) {
    //API GET Requests

    app.get("/api/notes", function(req, res) {
        res.json(notes)
    })

}