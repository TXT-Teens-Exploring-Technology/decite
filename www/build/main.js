webpackJsonp([2],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-period/add-period.module": [
		276,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return periodOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var periodOnePage = /** @class */ (function () {
    function periodOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.texts = [];
        this.newText = '';
        this.itemCount = 0;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    periodOnePage_1 = periodOnePage;
    periodOnePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(periodOnePage_1, {
            item: item
        });
    };
    periodOnePage.prototype.addPost = function () {
        this.texts.push({
            text: this.newText,
            likes: 0
        });
        this.newText = '';
        this.itemCount = this.texts.length;
    };
    periodOnePage.prototype.likePost = function (likedPost) {
        likedPost.likes += 1;
        console.log(likedPost.likes);
        console.log("Hello World");
        // sort likedPosts
        this.texts = this.texts.sort(function (a, b) {
            if (a.likes > b.likes) {
                return -1;
            }
            if (a.likes < b.likes) {
                return 1;
            }
            return 0;
        });
        console.log(this.texts);
    };
    periodOnePage = periodOnePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/txt-13/Desktop/ourApp/src/pages/period1/period1.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title color="light">Period 1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let text of texts" class=\'box1\'>\n\n    <ion-row>\n      <div>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/profile.png">\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n        </ion-item>\n\n        <ion-card-content>\n          <p class="textmargin">{{ text.text }}</p>\n        </ion-card-content>\n      </div>\n      <div class="btn">\n        <ion-col>\n          <button ion-button icon-start clear small (click)=\'likePost(text)\' class=\'btn\'>\n            <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup" class=\'btnset\'></ion-icon>\n            <div>{{text.likes}} Agree!</div>\n          </button>\n        </ion-col>\n      </div>\n\n    </ion-row>\n\n  </ion-card>\n  <div class="input">\n    <form>\n\n      <input id="post" type="text" placeholder="Let\'s hear your feedback!" [(ngModel)]="newText" [ngModelOptions]="{standalone:true}">\n\n      <!-- <input type="text" class="txt" placeholder="Got Anything to say?" [(ngModel)]="textText" name = "a"> -->\n\n      <button type="submit" class="postbtn" [value]="btnText" (click)="addPost()">Submit</button>\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/txt-13/Desktop/ourApp/src/pages/period1/period1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], periodOnePage);
    return periodOnePage;
    var periodOnePage_1;
}());

//# sourceMappingURL=period1.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return periodTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var periodTwoPage = /** @class */ (function () {
    function periodTwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.texts = [];
        this.newText = '';
        this.itemCount = 0;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    periodTwoPage_1 = periodTwoPage;
    periodTwoPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(periodTwoPage_1, {
            item: item
        });
    };
    periodTwoPage.prototype.addPost = function () {
        this.texts.push({
            text: this.newText,
            likes: 0
        });
        this.newText = '';
        this.itemCount = this.texts.length;
    };
    periodTwoPage.prototype.likePost = function (likedPost) {
        likedPost.likes += 1;
        console.log(likedPost.likes);
        console.log("Hello World");
        // sort likedPosts
        this.texts = this.texts.sort(function (a, b) {
            if (a.likes > b.likes) {
                return -1;
            }
            if (a.likes < b.likes) {
                return 1;
            }
            return 0;
        });
        console.log(this.texts);
    };
    periodTwoPage = periodTwoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/txt-13/Desktop/ourApp/src/pages/period2/period2.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="light"></ion-icon>\n      </button>\n      <ion-title color="light">Period 2</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-card *ngFor="let text of texts" class=\'box1\'>\n  \n      <ion-row>\n        <div>\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/imgs/profile.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n          </ion-item>\n  \n          <ion-card-content>\n            <p class="textmargin">{{ text.text }}</p>\n          </ion-card-content>\n        </div>\n        <div class="btn">\n          <ion-col>\n            <button ion-button icon-start clear small (click)=\'likePost(text)\' class=\'btn\'>\n              <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup" class=\'btnset\'></ion-icon>\n              <div>{{text.likes}} Agree!</div>\n            </button>\n          </ion-col>\n        </div>\n  \n      </ion-row>\n  \n    </ion-card>\n    <div class="input">\n      <form>\n  \n        <input id="post" type="text" placeholder="Let\'s hear your feedback!" [(ngModel)]="newText" [ngModelOptions]="{standalone:true}">\n  \n        <!-- <input type="text" class="txt" placeholder="Got Anything to say?" [(ngModel)]="textText" name = "a"> -->\n  \n        <button type="submit" class="postbtn" [value]="btnText" (click)="addPost()">Submit</button>\n  \n      </form>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/txt-13/Desktop/ourApp/src/pages/period2/period2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], periodTwoPage);
    return periodTwoPage;
    var periodTwoPage_1;
}());

//# sourceMappingURL=period2.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeriodPage = /** @class */ (function () {
    function PeriodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.texts = [];
        this.newText = '';
        this.itemCount = 0;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    PeriodPage_1 = PeriodPage;
    PeriodPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(PeriodPage_1, {
            item: item
        });
    };
    PeriodPage.prototype.addPost = function () {
        this.texts.push({
            text: this.newText,
            likes: 0
        });
        this.newText = '';
        this.itemCount = this.texts.length;
    };
    PeriodPage.prototype.likePost = function (likedPost) {
        likedPost.likes += 1;
        console.log(likedPost.likes);
        console.log("Hello World");
        // sort likedPosts
        this.texts = this.texts.sort(function (a, b) {
            if (a.likes > b.likes) {
                return -1;
            }
            if (a.likes < b.likes) {
                return 1;
            }
            return 0;
        });
        console.log(this.texts);
    };
    PeriodPage = PeriodPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/txt-13/Desktop/ourApp/src/pages/period3/period3.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="light"></ion-icon>\n      </button>\n      <ion-title color="light">Period 2</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-card *ngFor="let text of texts" class=\'box1\'>\n  \n      <ion-row>\n        <div>\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/imgs/profile.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n          </ion-item>\n  \n          <ion-card-content>\n            <p class="textmargin">{{ text.text }}</p>\n          </ion-card-content>\n        </div>\n        <div class="btn">\n          <ion-col>\n            <button ion-button icon-start clear small (click)=\'likePost(text)\' class=\'btn\'>\n              <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup" class=\'btnset\'></ion-icon>\n              <div>{{text.likes}} Agree!</div>\n            </button>\n          </ion-col>\n        </div>\n  \n      </ion-row>\n  \n    </ion-card>\n    <div class="input">\n      <form>\n  \n        <input id="post" type="text" placeholder="Let\'s hear your feedback!" [(ngModel)]="newText" [ngModelOptions]="{standalone:true}">\n  \n        <!-- <input type="text" class="txt" placeholder="Got Anything to say?" [(ngModel)]="textText" name = "a"> -->\n  \n        <button type="submit" class="postbtn" [value]="btnText" (click)="addPost()">Submit</button>\n  \n      </form>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/txt-13/Desktop/ourApp/src/pages/period3/period3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PeriodPage);
    return PeriodPage;
    var PeriodPage_1;
}());

//# sourceMappingURL=period3.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_period1_period1__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_period2_period2__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_period3_period3__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_period_service_period_service__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { NewPage } from '../pages/new/new';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_period1_period1__["a" /* periodOnePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_period2_period2__["a" /* periodTwoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_period3_period3__["a" /* PeriodPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-period/add-period.module#AddPeriodPageModule', name: 'AddPeriodPage', segment: 'add-period', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_period1_period1__["a" /* periodOnePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_period2_period2__["a" /* periodTwoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_period3_period3__["a" /* PeriodPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_period_service_period_service__["a" /* PeriodServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* unused harmony export appComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_period1_period1__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_period2_period2__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_period3_period3__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_period1_period1__["a" /* periodOnePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Period 1', component: __WEBPACK_IMPORTED_MODULE_4__pages_period1_period1__["a" /* periodOnePage */] },
            { title: 'Period 2', component: __WEBPACK_IMPORTED_MODULE_5__pages_period2_period2__["a" /* periodTwoPage */] },
            { title: 'Period 3', component: __WEBPACK_IMPORTED_MODULE_6__pages_period3_period3__["a" /* PeriodPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/txt-13/Desktop/ourApp/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-row>\n          <button id="profileimg"></button>\n          <ion-title id="profiletxt">Marty McFLy</ion-title>\n        </ion-row>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content padding>\n        <ion-list> \n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n            {{p.title}}\n          </button>\n  \n        </ion-list>\n        <!-- <button ion-button *ngFor="let p of pages" (click)="addPeriod()"> Add new Period\n          {{ p.title }}\n        </button> -->\n    </ion-content>\n  \n  </ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/txt-13/Desktop/ourApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

var appComponent = /** @class */ (function () {
    function appComponent() {
        this.btnText = 'Send';
        this.textText = "Got Anything to say?";
    }
    appComponent.prototype.ngOnInit = function () {
        //this.itemCount = this.texts.length;
    };
    return appComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeriodServiceProvider = /** @class */ (function () {
    function PeriodServiceProvider(storage) {
        this.storage = storage;
        this.periods = [];
        console.log('Hello PeriodServiceProvider Provider');
    }
    PeriodServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
    ], PeriodServiceProvider);
    return PeriodServiceProvider;
}());

//# sourceMappingURL=period-service.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map