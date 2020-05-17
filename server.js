// dependencies
let express = require("express");

// set up express App
let app = express();
let PORT = process.env.PORT || 3000

//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

//starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});