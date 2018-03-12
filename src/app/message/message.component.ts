import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  Messages:string[];

  constructor() {
    this.Messages = ['You can now choose your own pictures.'];
   }

  ngOnInit() {
  }

}
