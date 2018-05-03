import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public Game:GameComponent) { }

  ngOnInit() {
  }

}
