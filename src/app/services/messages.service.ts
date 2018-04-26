import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  Messages: {text:string, type:'success' | 'danger'} [];

  constructor() {
    this.Messages = [

      { text: 'This is intialized in the service.', type: 'success' },
      { text: 'The second message.', type: 'danger' }
      
    ];

   }

}
