// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 7000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

