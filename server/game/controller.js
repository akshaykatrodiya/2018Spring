var express = require('express');
var Game = require('./model');

var app = express.Router();

var game = new Game();

module.exports = app
    .get('/quotes', (req, res) => 
        res.send( game.getQuotes(req.query.playerId) ) 
    )
    .get('/state', (req, res) => res.send(game) )
    .post('/picture', (req, res) => res.send( game.flipPicture() ) )
    .post('/quotes', (req, res) => {
        console.log(req.body)
        game.submitQuote(req.body.text, req.body.playerId)
        // res.send( game.flipPicture() )
        req.send({ success: true }) 
    })
