import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

declare var googleyolo: any;
// declare var window: Window & { onGoogleYoloLoad:Function }
declare var FB: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _game: GameService) { 
    // window.onGoogleYoloLoad = (googleyolo: any) => {
    //   // The 'googleyolo' object is ready for use.
    // };
    window.fbAsyncInit = () => {
      FB.init({
          appId      : '622173491454603',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.12'
      });
            
      FB.AppEvents.logPageView();   
    };

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = <HTMLScriptElement>d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
   }

  ngOnInit() {
  }

  login(name: string, password: string){
    this._game.login(name, password);
  }

  fblogin(){
    FB.login((credentials:any)=>{
        console.log(credentials);
    })
  }

  googlelogin(){
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com"
        // "googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "13224662496-ap8p5fk72tejtq8rnllq991dusdlf9oq.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      this._game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    } )
  }

}
