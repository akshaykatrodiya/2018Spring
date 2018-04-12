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
  Me = new User();
  private _api = "http://localhost:8080/game";
  
  constructor(private http: Http) {
    this.Me.name = 'Akshay Katrodiya';
    http.get(this._api + "/quotes").subscribe(data=> this.Me.myQuotes = data.json())
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


  submitQuote(e: MouseEvent, text: string, playerName: string){
    e.preventDefault();

    if(this.myPlayedQuote()) return;

    this.Model.playedQuotes.push({text: text, playerName: this.Me.name, chosen:false});
    this.Me.myQuotes.splice( this.Me.myQuotes.indexOf(text), 1);
  }

  myPlayedQuote = () => this.Model.playedQuotes.find( x => x.playerName == this.Me.name );
  chosenQuotes = () => this.Model.playedQuotes.find( x => x.chosen );
  isEveryOneDone = () => this.Model.playedQuotes.length == this.Model.players.length - 1;
  iAmTheDealer = () => this.Me.name == this.Model.Dealer;
}
