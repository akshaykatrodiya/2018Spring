import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, User, Quote } from '../models/game';

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
  
  constructor(private http: Http) {
    // this.Me.name = 'Akshay Katrodiya';
    // http.get(this._api + "/quotes", {params: { playerId: this.Me.name } }).subscribe(data=> this.Me.myQuotes = data.json())
    setInterval(()=> this.refresh(), 1000)
   }

  ngOnInit() {
  }

  refresh() {
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())  
  }

  flipPicture(e: MouseEvent){
    // Only allow the dealer to flip the picture and only before user start submitting quotes
    if(this.iAmTheDealer() && this.Model.playedQuotes.length==0){
      if(this.Me.name==this.Model.dealerId){

      }
      this.http.post(this._api + "/picture", {})
          .subscribe();
    }
  }


  submitQuote(e: MouseEvent, text: string, playerId: string){
    e.preventDefault();

    // The dealer should not be able to submit the quote
      if(this.myPlayedQuote() || this.iAmTheDealer()) return;

      this.http.post(this._api + "/quotes", {text: text, playerId: this.Me.name})
        .subscribe(data=>{
          if(data.json().success){
            this.Me.myQuotes.splice( this.Me.myQuotes.indexOf(text), 1);
          }
        }, err=> {
          console.log(err);
        });
  }

  login(name: string){
    this.http.get(this._api + "/quotes", { params: {playerId: name} })
    .subscribe(data=> this.Me = {name: name, myQuotes: data.json()});
   
  }

  myPlayedQuote = () => this.Model.playedQuotes.find( x => x.playerId == this.Me.name );
  chosenQuotes = () => this.Model.playedQuotes.find( x => x.chosen );
  isEveryOneDone = () => this.Model.playedQuotes.length == this.Model.players.length - 1;
  iAmTheDealer = () => this.Me.name == this.Model.dealerId;
}
