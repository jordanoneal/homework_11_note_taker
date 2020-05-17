//dependencies
let path = require("path");

//ROUTING

module.exports = function(app) {
    //HTML GET Requests

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //i want to use app.get("*", ) but this is messing up the notes.html file
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

}