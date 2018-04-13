webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container\">\r\n  <app-message></app-message>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var message_component_1 = __webpack_require__("./src/app/message/message.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var game_component_1 = __webpack_require__("./src/app/game/game.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'game', component: game_component_1.GameComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                message_component_1.MessageComponent,
                home_component_1.HomeComponent,
                game_component_1.GameComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports) {

module.exports = ".my-quotes {\r\n    cursor: not-allowed;\r\n}\r\n.my-quotes .enabled {\r\n    cursor: pointer;\r\n}\r\n.my-quotes .enabled:hover {\r\n    background-color: #DDEEFF;\r\n}"

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">My Quotes</div>\r\n      <ul class=\"list-group list-group-flush my-quotes\">\r\n        <li *ngFor=\"let quote of Me.myQuotes\" \r\n          (click)=\"submitQuote($event, quote)\" \r\n          [ngClass]=\"{ enabled: !myPlayedQuote() }\"\r\n          class=\"list-group-item\">\r\n          {{quote}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n      <div class=\"card\">\r\n          <div class=\"card-header\">Played Quotes</div>\r\n          <ul class=\"list-group list-group-flush\">\r\n              <li *ngFor=\"let quote of Model.playedQuotes\"\r\n                  [ngClass]=\"{ 'list-group-item-success': quote.chosen }\" \r\n                  class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                  {{quote.text}}\r\n                  <span *ngIf=\"!isEveryOneDone() || (!iAmTheDealer() && !chosenQuotes())\" class=\"badge badge-light\">hidden</span>\r\n                  <span *ngIf=\"chosenQuotes()\" class=\"badge badge-primary\">{{quote.playerName}}</span>\r\n                  <button *ngIf=\"isEveryOneDone() && iAmTheDealer() && !chosenQuotes()\"\r\n                          (click)=\"quote.chosen = true\" \r\n                          class=\"btn btn-sm btn-primary\">\r\n                          Choose\r\n                  </button>\r\n              </li>\r\n          </ul>\r\n        </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img\" [src]=\"Model.picture.url\" />\r\n      <div class=\"card-img-overlay\" style=\"text-align:center\">\r\n        <button class=\"btn btn-success btn-lg\" (click)=\"flipPicture($event)\">Flip Picture</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n          <div class=\"card-header\">Other Players</div>\r\n          <ul class=\"list-group list-group-flush\">\r\n              <li *ngFor=\"let player of Model.players\" class=\"list-group-item\">\r\n                  <img style=\"height: 20px; width: 20px\" class=\"rounded\">\r\n                  {{player.name}}\r\n              </li>\r\n          </ul>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var game_1 = __webpack_require__("./src/app/models/game.ts");
var GameComponent = /** @class */ (function () {
    function GameComponent(http) {
        var _this = this;
        this.http = http;
        this.Model = new game_1.Game();
        this.Me = new game_1.User();
        this._api = "http://localhost:8080/game";
        this.myPlayedQuote = function () { return _this.Model.playedQuotes.find(function (x) { return x.playerName == _this.Me.name; }); };
        this.chosenQuotes = function () { return _this.Model.playedQuotes.find(function (x) { return x.chosen; }); };
        this.isEveryOneDone = function () { return _this.Model.playedQuotes.length == _this.Model.players.length - 1; };
        this.iAmTheDealer = function () { return _this.Me.name == _this.Model.Dealer; };
        this.Me.name = 'Akshay Katrodiya';
        http.get(this._api + "/quotes").subscribe(function (data) { return _this.Me.myQuotes = data.json(); });
        setInterval(function () { return _this.refresh(); }, 1000);
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._api + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    };
    GameComponent.prototype.flipPicture = function (e) {
        this.http.post(this._api + "/picture", {})
            .subscribe();
    };
    GameComponent.prototype.submitQuote = function (e, text, playerName) {
        e.preventDefault();
        if (this.myPlayedQuote())
            return;
        this.Model.playedQuotes.push({ text: text, playerName: this.Me.name, chosen: false });
        this.Me.myQuotes.splice(this.Me.myQuotes.indexOf(text), 1);
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"card\" >\r\n      <img class=\"card-img-top\" src=\"https://media2.s-nbcnews.com/j/newscms/2018_06/2316986/180205-eagles-nick-foles-trophy-njs-847a_dc249df1dd2bf248f5f11b3c6cf6a86c.nbcnews-fp-320-280.jpg\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"card\" >\r\n      <img class=\"card-img-top\" src=\"https://media2.s-nbcnews.com/j/newscms/2018_06/2316986/180205-eagles-nick-foles-trophy-njs-847a_dc249df1dd2bf248f5f11b3c6cf6a86c.nbcnews-fp-320-280.jpg\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"card\" >\r\n      <img class=\"card-img-top\" src=\"https://media2.s-nbcnews.com/j/newscms/2018_06/2316986/180205-eagles-nick-foles-trophy-njs-847a_dc249df1dd2bf248f5f11b3c6cf6a86c.nbcnews-fp-320-280.jpg\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Card title</h5>\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/message/message.component.css":
/***/ (function(module, exports) {

module.exports = "#messages{padding-top: 0.5rem};"

/***/ }),

/***/ "./src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\">\r\n  <div class=\"alert alert-success\">\r\n    {{Messages[0]}}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.Messages = ['You can now choose your own pictures.'];
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'app-message',
            template: __webpack_require__("./src/app/message/message.component.html"),
            styles: [__webpack_require__("./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;


/***/ }),

/***/ "./src/app/models/game.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game() {
        this.playedQuotes = [
            { text: "That's fake news", playerName: 'Dil Katrodiya', chosen: false }
        ];
        this.players = [
            { name: 'Akshay Katrodiya', myQuotes: [] },
            { name: 'Dil Katrodiya', myQuotes: [] },
            { name: 'PalDil Katrodiya', myQuotes: [] },
        ];
        this.Dealer = 'Akshay Katrodiya';
    }
    return Game;
}());
exports.Game = Game;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Quote = /** @class */ (function () {
    function Quote() {
        this.chosen = false;
    }
    return Quote;
}());
exports.Quote = Quote;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"#\">What Do You MEME?</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/game\" routerLinkActive=\"active\">Play</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n              <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n              </li>\r\n          </ul>\r\n          </div>\r\n      </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map