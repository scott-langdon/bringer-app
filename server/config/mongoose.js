var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

// mongoose.connect('mongodb://27017/beltTest');

// mongoose connection
// mongoose.connect("mongodb://localhost:27017/beltTest");
var db = mongoose.connection;

// mongo error 
db.on('error', console.error.bind(console, 'connection error:'));

var models_path = path.join(__dirname, '../models/');

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf(".js") >= 0){
        require(path.join(models_path, file));
    }
})