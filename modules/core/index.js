var express = require("express");
var router = require("./server/routes/core.server.routes");

module.exports = function(app){
    app.core = {};
    app.core.dirname = __dirname;
    app.use('/core', express.static(__dirname + '/public/assets'));
    router(app);
    console.log("Lets go!");
}