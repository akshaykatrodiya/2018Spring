import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessageComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
