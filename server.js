var express = require('express');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3007;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the application routes
require(path.join(__dirname, './routing/apiRoutes.js'))(app);
require(path.join(__dirname, './routing/htmlRoutes.js'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder is listening on PORT: ' + PORT);
});
