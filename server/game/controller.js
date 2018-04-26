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
        console.log(req.body);
        // Catch the error even if dealer submit the quote and on the server side 
        try {
            game.submitQuote(req.body.text, req.body.playerId);
            req.send({ success: true });
        } catch(error) {
            res.status(403).send({success: false, message: error.message})
        }
        // res.send( game.flipPicture() )
        
    })
    .post('/quotes/choose', (req, res) => {
        if(req.body.playerId != game.dealerId){
            res.status(403).send({ success: false, message: "Only the dealer can choose a quote" });
        }else{
            game.chooseQuote(req.body.text);
            res.send( { success: true } );
        }
    })
