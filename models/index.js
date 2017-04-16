var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

// var Album = require('./album');

// module.exports.AlbumModel = Album;
module.exports.AlbumModel = require('./album.js');
