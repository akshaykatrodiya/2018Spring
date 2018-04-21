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
        // The dealer should not be able to submit the quote
        try {
            console.log(req.body);
            game.submitQuote(req.body.text, req.body.playerId);
        } catch {
            res.status(403).send({success: false, message: error.message})
        }
        // res.send( game.flipPicture() )
        req.send({ success: true }) 
    })
