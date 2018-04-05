var express = require('express');
var Game = require('./model');

var app = express.Router();

var game = new Game();

module.exports = app
    .get('/quotes', (req, res) => res.send(game.getQuotes()) )
    .get('/state', (req, res) => res.send(game) )
    .post('/picture', (req, res) => res.send( game.flipPicture() ) )
