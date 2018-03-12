import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';


const appRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'game', component:GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessageComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
