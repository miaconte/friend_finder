var path = require('path');

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  // Displays all characters
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });