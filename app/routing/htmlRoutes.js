var path = require("path");

module.exports = function(app) {
    // will display survey page when /survey is visited.
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // default catches undefined routes and send user to home page. 
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};