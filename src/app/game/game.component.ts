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
    this.http.post(this._api + "/picture", {})
        .subscribe();
  }


  submitQuote(e: MouseEvent, text: string, playerId: string){
    e.preventDefault();

    if(this.myPlayedQuote()) return;

    this.http.post(this._api + "/quotes", {text: text, playerId: this.Me.name})
        .subscribe(data=>{
          if(data.json().success){
            this.Me.myQuotes.splice( this.Me.myQuotes.indexOf(text), 1);
          }
        });    

    // this.Model.playedQuotes.push();
  }

  login(name: string){
    this.http.get(this._api + "/quotes", { params: {playerId: name} })
    .subscribe(data=> this.Me = {name: name, myQuotes: data.json()})
  }

  myPlayedQuote = () => this.Model.playedQuotes.find( x => x.playerId == this.Me.name );
  chosenQuotes = () => this.Model.playedQuotes.find( x => x.chosen );
  isEveryOneDone = () => this.Model.playedQuotes.length == this.Model.players.length - 1;
  iAmTheDealer = () => this.Me.name == this.Model.dealerId;
}
