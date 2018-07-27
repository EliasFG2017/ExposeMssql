var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

var config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',routes)
// routes(app);

var server = app.listen(config.app.port, function () {
    console.log("app running on port.", server.address().port);
});
