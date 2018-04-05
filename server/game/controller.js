var express = require('express');
var app = express.Router();

var Game = require('./model');

// var game = new Game();

module.exports = app
    .get('/goodbey', (req, res) => req.send(["A quote"]))
