import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, User, Quote } from '../models/game';
import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model = new Game();
  // Me = new User();
  Me: User;
  private _api = "http://localhost:8080/game";
  
  constructor(
    private http: Http, 
    private _messages: MessagesService, 
    private _game: GameService, 
    private _router: Router
  ) {
    // this.Me.name = 'Akshay Katrodiya';
    // http.get(this._api + "/quotes", {params: { playerId: this.Me.name } }).subscribe(data=> this.Me.myQuotes = data.json())
    this.Me = _game.Me;
    if(!this.Me){
      _router.navigate(['/login']);
    }
    this.join(this.Me.name)
    setInterval(()=> this.refresh(), 1000)
   }

  ngOnInit() {
  }

  refresh() {
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())  
  }

  flipPicture(e: MouseEvent){
    this._messages.Messages.push({text: "Picture flipped", type: 'success'})
    // Only allow the dealer to flip the picture and only before user start submitting quotes
    if(this.iAmTheDealer() && this.Model.playedQuotes.length==0){
      if(this.Me.name==this.Model.dealerId){

      }
      this.http.post(this._api + "/picture", {})
          .subscribe();
    }
  }

  chooseQuote(e: MouseEvent, quote: Quote){
    e.preventDefault();
    this.http.post(this._api + "/quotes/choose", { text: quote.text, playerId: this.Me.name })
      .subscribe(data=> {
      }, err=> {
        console.log(err);
      });
    }


  submitQuote(e: MouseEvent, text: string){
    e.preventDefault();

    // The dealer should not be able to submit the quote at the client side at first place
      if(this.myPlayedQuote() || this.iAmTheDealer()) return;

      this._messages.Messages.push({text: 'Quote submitted' + text, type: 'success'})
      this.http.post(this._api + "/quotes", {text: text, playerId: this.Me.name})
        .subscribe(data=>{
          if(data.json().success){
            this.Me.myQuotes.splice( this.Me.myQuotes.indexOf(text), 1);
          }
        }, err=> {
          console.log(err);
        });
  }

  join(name: string){
    this._messages.Messages.push({text: 'You\'ve joined this game. Welcome ' + name, type: 'success'})
    this.http.get(this._api + "/quotes", { params: {playerId: name} })
    .subscribe(data=> this.Me.myQuotes = data.json() );
  }

  myPlayedQuote = () => this.Model.playedQuotes.find( x => x.playerId == this.Me.name );
  chosenQuotes = () => this.Model.playedQuotes.find( x => x.chosen );
  isEveryOneDone = () => this.Model.playedQuotes.length == this.Model.players.length - 1;
  iAmTheDealer = () => this.Me.name == this.Model.dealerId;
}
