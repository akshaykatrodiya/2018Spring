import { Component, OnInit } from '@angular/core';
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model = new Game();
  Me = new User();
  constructor() { }

  ngOnInit() {
  }

  submitQuote(e: MouseEvent, text: string, playerName: string){
    e.preventDefault();

    if(this.myPlayedQuote()) return;

    this.Model.playedQuotes.push({text: text, playerName: this.Me.name, chosen:false});
    this.Model.myQuotes.splice( this.Model.myQuotes.indexOf(text), 1);
  }

  myPlayedQuote(): Quote | null {
    return this.Model.playedQuotes.find( x => x.playerName == this.Me.name );
  }
}
