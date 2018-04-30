import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _game: GameService) { }

  ngOnInit() {
  }

  login(name: string, password: string){
    this._game.login(name, password);
  }

}
