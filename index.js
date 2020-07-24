const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const fileRouter = require("./routes/file");
//define a port number in which our app needs to be started
const port = process.env.PORT || 5000;

//Use the logger package to get the log details of our application
app.use(logger('dev'));
//use cors to enable Cross-Origin Resource Sharing
app.use(cors());
// use body-parser to handle HTTP POST requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/file", fileRouter);

app.listen(port, function () {
    console.log("Runnning on " + port);
});

module.exports = app;