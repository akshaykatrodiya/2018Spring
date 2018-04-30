import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User } from '../models/game';

@Injectable()
export class GameService {

  Me: User;
  constructor(private http: Http, private _messages: MessagesService) { 

   }
   
   login(name: string, password: string){
     if(password == '123'){
       // Log the user in
       this.Me = {name: name, myQuotes: [] };
     }
   }
}
