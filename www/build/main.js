webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_database_database__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { profiles } from '../../providers/database/database';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(database) {
        this.database = database;
        this.todo = {};
        this.editOn = false;
        this.user = this.database.getUser();
    }
    ProfilePage.prototype.editButton = function () {
        this.editOn = true;
    };
    ProfilePage.prototype.confirmButton = function () {
        this.database.editUser(this.user.name, this.user.school, this.user.grade, this.user.contact);
        this.editOn = false;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-avatar item-start>\n      <img class=\'proimg\' src="assets/imgs/profile2.png">\n    </ion-avatar>\n    <button id="editbtn" (click)="editButton()">Edit Profile</button>\n    <div *ngIf="editOn==false">\n      <div class="profileinfo">\n        <button class="info">\n          <ion-icon ios="ios-contact" md="md-contact">\n            <p class="profileFont">{{user.name}}</p>\n          </ion-icon>\n        </button>\n      </div>\n\n      <div class="profileinfo">\n        <button class="info">\n          <ion-icon ios="ios-home" md="md-home">\n            <p class="profileFont">{{user.school}}</p>\n          </ion-icon>\n        </button>\n      </div>\n\n      <div class="profileinfo">\n        <button class="info">\n          <ion-icon ios="ios-school" md="md-school">\n            <p class="profileFont">{{user.grade}}</p>\n          </ion-icon>\n        </button>\n      </div>\n\n      <div class="profileinfo">\n        <button class="info">\n          <ion-icon ios="ios-mail" md="md-mail">\n            <p class="profileFont">{{user.contact}}</p>\n          </ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n  <form *ngIf="editOn">\n      <div class="profileinfo">\n          <button class="info">\n            <ion-item>\n              <ion-label>\n              <ion-icon ios="ios-contact" md="md-contact">        \n              </ion-icon>\n            </ion-label>\n              <ion-input [(ngModel)]="user.name" [ngModelOptions]="{standalone: true}"></ion-input>  \n            </ion-item>\n          </button>\n        </div>\n\n    <div class="profileinfo">\n        <button class="info">\n          <ion-item>\n            <ion-label>\n            <ion-icon ios="ios-home" md="md-home">        \n            </ion-icon>\n          </ion-label>\n            <ion-input [(ngModel)]="user.school" [ngModelOptions]="{standalone: true}"></ion-input>  \n          </ion-item>\n        </button>\n      </div>\n\n    <div class="profileinfo">\n        <button class="info">\n          <ion-item>\n            <ion-label>\n            <ion-icon ios="ios-school" md="md-school">        \n            </ion-icon>\n          </ion-label>\n            <ion-input [(ngModel)]="user.grade" [ngModelOptions]="{standalone: true}"></ion-input>  \n          </ion-item>\n        </button>\n      </div>\n\n    <div class="profileinfo">\n      <button class="info">\n        <ion-item>\n          <ion-label>\n          <ion-icon ios="ios-mail" md="md-mail">        \n          </ion-icon>\n        </ion-label>\n          <ion-input [(ngModel)]="user.contact" [ngModelOptions]="{standalone: true}"></ion-input>  \n        </ion-item>\n      </button>\n    </div>\n  </form>\n  <button ion-button (click)="confirmButton()" class="savebtn" *ngIf="editOn">Confirm</button>\n\n</ion-content>'/*ion-inline-end:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_database_database__["a" /* DatabaseProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		275,
		0
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeriodNewPage = /** @class */ (function () {
    function PeriodNewPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.texts = [];
        this.newText = '';
        this.itemCount = 0;
        this.name = 'No Class Selected';
        this.user = { name: 'loading' };
        this.info = this.navParams.get('info');
        if (this.info != undefined) {
            this.texts = this.info.comments;
            this.name = this.info.teacherName;
        }
        else {
            this.info = {
                class_id: 0,
                className: 'Algebra',
                teacherPicture: 'assets/imgs/teacher.png',
                teacherName: 'Mr. Domingez',
                roomNumber: "Room 745",
                period: 'Period 1',
                comments: [
                    {
                        likes: 0,
                        text: 'The atmosphere of Mr. Domingez’s class is off. It feels like im trapped.',
                    }
                ]
            };
            this.texts = this.info.comments;
            this.name = this.info.teacherName;
            this.user = this.database.getUser();
        }
    }
    PeriodNewPage.prototype.ionViewDidEnter = function () {
        this.user = this.database.getUser();
    };
    PeriodNewPage.prototype.addPost = function () {
        this.texts.push({
            text: this.newText,
            likes: 0
        });
        this.newText = '';
        this.itemCount = this.texts.length;
    };
    PeriodNewPage.prototype.likePost = function (likedPost) {
        if (likedPost.likes == 0) {
            likedPost.likes += 1;
        }
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
    PeriodNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/pages/period-new/period-new.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title color="light">Mrs. Anderson</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- other users -->\n  <ion-card class=\'box1\'>\n\n    <div>\n      <ion-row>\n        <ion-col col-6>\n          <div>\n            <ion-item>\n              <ion-avatar item-start>\n                <img class="profileicon" src="assets/imgs/cathy.png">\n              </ion-avatar>\n              <h2>Cathy R.</h2>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div>\n            <button ion-button icon-start clear small class=\'btn\'>\n              <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n              20 AGREE!\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-card-content>\n      <p class="textmargin">Giving homework right off the textbook isn’t challenging enough. </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- other users -->\n  <ion-card class=\'box1\'>\n\n    <div>\n      <ion-row>\n        <ion-col col-6>\n          <div>\n            <ion-item>\n              <ion-avatar item-start>\n                <img class="profileicon" src="assets/imgs/fernando.png">\n              </ion-avatar>\n              <h2>Richard G.</h2>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div>\n            <button ion-button icon-start clear small class=\'btn\'>\n              <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n              16 AGREE!\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-card-content>\n      <p class="textmargin">It just doesn’t seem appropriate to have the same copies of homework </p>\n    </ion-card-content>\n  </ion-card>\n\n\n    <!-- other users -->\n    <ion-card class=\'box1\'>\n\n        <div>\n          <ion-row>\n            <ion-col col-6>\n              <div>\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img class="profileicon" src="assets/imgs/jesus.png">\n                  </ion-avatar>\n                  <h2>Jesus C.</h2>\n                </ion-item>\n              </div>\n            </ion-col >\n            <ion-col col-6>\n              <div>\n                <button ion-button icon-start clear small class=\'btn\'>\n                  <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n                  5 AGREE!\n                </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n    \n        <ion-card-content>\n          <p class="textmargin">It just doesn’t seem appropriate to have the same copies of homework </p>\n        </ion-card-content>\n      </ion-card>\n\n\n        <!-- other users -->\n  <ion-card class=\'box1\' *ngFor="let text of texts">\n\n      <div>\n        <ion-row>\n          <ion-col col-6> \n            <div>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img class="profileicon" src="assets/imgs/profile2.png">\n                </ion-avatar>\n                <h2>{{user.name}}</h2>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div>\n              <button ion-button icon-start clear small (click)="likePost(text)"class=\'btn\'>\n                <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n                {{text.likes}} AGREE!\n              </button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n  \n      <ion-card-content>\n        <p class="textmargin">{{ text.text }}</p>\n      </ion-card-content>\n    </ion-card>\n\n  <!-- <ion-row>\n    <form>\n      <div>\n        <input id="post" type="text" placeholder="Let\'s hear your feedback!" [(ngModel)]="newText" [ngModelOptions]="{standalone:true}">\n      </div>\n      <div>\n        <button type="submit" class="postbtn" [value]="btnText" (click)="addPost()">Submit</button>\n      </div>\n    </form>\n  </ion-row> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="footer">\n    <form (ngSubmit)="addPost()" id="custom-input">\n      <ion-row style="margin-top: 34px;">\n        <ion-col col-10 class="type">\n            <ion-item class="custom-input">\n                <ion-input type="text" [(ngModel)]="newText"  name="title" placeholder="Let\'s hear your feedback!"></ion-input>\n              </ion-item>\n        </ion-col>\n        <ion-col col-2 class="type">\n            <button ion-button type="submit" block id="custom-btn">\n              <img src="assets/arrow.png" alt="">\n            </button>\n          </ion-col>\n      </ion-row>\n\n\n\n    </form>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/pages/period-new/period-new.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], PeriodNewPage);
    return PeriodNewPage;
}());

//# sourceMappingURL=period-new.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_period_period__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_period_new_period_new__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_period_period__["a" /* PeriodPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_period_new_period_new__["a" /* PeriodNewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_period_period__["a" /* PeriodPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_period_new_period_new__["a" /* PeriodNewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* unused harmony export appComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_period_period__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_period_new_period_new__ = __webpack_require__(196);
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
    function MyApp(platform, statusBar, splashScreen, db, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_period_period__["a" /* PeriodPage */];
        this.flag = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = this.db.getPages();
        console.log(this.pages);
        this.user = this.db.getUser();
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
        this.nav.setRoot(page.component, { info: this.db.getClass(page.class_id) });
    };
    MyApp.prototype.profilePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.addMenu = function () {
        if (this.flag === false) {
            var otherPages = [
                {
                    class_id: 0,
                    className: 'Algebra',
                    image: 'assets/imgs/addTeacher.png',
                    title: 'Mrs. Anderson',
                    room: "Room 745",
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_period_new_period_new__["a" /* PeriodNewPage */]
                }
            ];
            this.pages = this.pages.concat(otherPages);
            this.flag = true;
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Execeded Free Class Additions',
                subTitle: 'You can only add one class for free. Please upgrade for more class additions.',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary" id="sidebar" >\n      <ion-row style="margin-top:25px; padding-bottom: 15px; border-bottom: solid thin white">\n        <button menuClose ion-button id="close-image" (click)="profilePage()">\n          <img class="menubtn" src="./assets/imgs/profile2.png">\n        </button>\n        <h2 style="font-weight: bold; margin-top:15px; padding-bottom: 15px">{{user.name}}</h2>\n      </ion-row>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content style="background-color: #FFBF48; width:100%; height : 100%" padding>\n\n    <ion-list>\n \n      <button class="lists" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" floating>\n        <div class="containter">\n          <div id="first">\n            <ion-avatar>\n              <img id="teacherimg" [src]="p.image">\n            </ion-avatar>\n          </div>\n          <div id="second">\n            <p style="color: #222;font-weight:bold; font-size:15px;">{{p.title}}</p>\n            <p style="color: #222;">{{p.className}}</p>\n            <p style="color: #222; font-weight:300;">{{p.room}}</p>\n          </div>\n        </div>\n\n\n      </button>\n\n\n    </ion-list>\n  </ion-content>\n\n  <ion-footer class="custom">\n    <ion-toolbar class="footer custom" >\n      <div class="addChannel custom" >\n        <button id="addmenu" ion-button (click)="addMenu()"> Add Channel</button>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n\n\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_period_period__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider() {
        this.user = {
            name: "Ricardo G.",
            school: "Verbum Dei",
            grade: "11th",
            contact: "RG3@gmail.com",
        };
        this.classes = [
            {
                class_id: 0,
                className: 'Algebra',
                teacherPicture: 'assets/imgs/teacher.png',
                teacherName: 'Mr. Domingez',
                roomNumber: "Room 745",
                period: 'Period 1',
                comments: [
                    {
                        likes: 0,
                        text: 'The atmosphere of Mr. Domingez’s class is off. It feels like im trapped.',
                    }
                ]
            },
            {
                class_id: 1,
                className: 'English',
                teacherName: 'Mr. Rodriguez',
                teacherPicture: 'assets/imgs/teacher2.png',
                roomNumber: "Room 207",
                period: 'Period 2',
                comments: [
                    {
                        likes: 0,
                        text: "I'm bored in class"
                    }
                ]
            },
            {
                class_id: 2,
                className: 'Physics',
                teacherName: 'Ms. Promunis',
                teacherPicture: 'assets/imgs/teacher3.png',
                roomNumber: "Room 302",
                period: 'Period 3',
                comments: [
                    {
                        likes: 0,
                        text: 'Bro that Homework was easy I want a challenge'
                    }
                ]
            },
            {
                class_id: 3,
                className: 'Bio',
                teacherName: 'Mr. Johnson',
                teacherPicture: 'assets/imgs/teacher4.png',
                roomNumber: "Room 506",
                period: 'Period 4 ',
                comments: [
                    {
                        likes: 0,
                        text: 'Alright bet, this class is too easy'
                    }
                ]
            },
        ];
        this.profiles = [
            {
                name: 'Ricardo G.',
                school: 'Verbum Dei',
                grade: '11th',
                contact: '323-394-6216',
            }
        ];
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.getClass = function (class_id) {
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].class_id == class_id) {
                return this.classes[i];
            }
        }
    };
    DatabaseProvider.prototype.getPages = function () {
        var output = [];
        for (var i = 0; i < this.classes.length; i++) {
            output.push({
                title: this.classes[i].teacherName,
                image: this.classes[i].teacherPicture,
                className: this.classes[i].className,
                room: this.classes[i].roomNumber,
                component: __WEBPACK_IMPORTED_MODULE_1__pages_period_period__["a" /* PeriodPage */],
                class_id: this.classes[i].class_id
            });
        }
        return output;
    };
    //For the Profile Data
    DatabaseProvider.prototype.getUser = function () {
        console.log('im being called');
        return this.user;
    };
    DatabaseProvider.prototype.editUser = function (name, school, grade, contact) {
        this.user.name = name;
        this.user.school = school;
        this.user.grade = grade;
        this.user.contact = contact;
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(39);
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
    function PeriodPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.texts = [];
        this.newText = '';
        this.itemCount = 0;
        this.name = 'No Class Selected';
        this.user = { name: 'loading' };
        this.info = this.navParams.get('info');
        if (this.info != undefined) {
            this.texts = this.info.comments;
            this.name = this.info.teacherName;
        }
        else {
            this.info = {
                class_id: 0,
                className: 'Algebra',
                teacherPicture: 'assets/imgs/teacher.png',
                teacherName: 'Mr. Domingez',
                roomNumber: "Room 745",
                period: 'Period 1',
                comments: [
                    {
                        likes: 0,
                        text: 'The atmosphere of Mr. Domingez’s class is off. It feels like im trapped.',
                    }
                ]
            };
            this.texts = this.info.comments;
            this.name = this.info.teacherName;
            this.user = this.database.getUser();
        }
    }
    PeriodPage.prototype.ionViewDidEnter = function () {
        this.user = this.database.getUser();
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
        if (likedPost.likes == 0) {
            likedPost.likes += 1;
        }
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
    PeriodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/pages/period/period.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title color="light">{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- other users -->\n  <ion-card class=\'box1\'>\n\n    <div>\n      <ion-row>\n        <ion-col col-6>\n          <div>\n            <ion-item>\n              <ion-avatar item-start>\n                <img class="profileicon" src="assets/imgs/cathy.png">\n              </ion-avatar>\n              <h2>Cathy R.</h2>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div>\n            <button ion-button icon-start clear small class=\'btn\'>\n              <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n              20 AGREE!\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-card-content>\n      <p class="textmargin">Giving homework right off the textbook isn’t challenging enough. </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- other users -->\n  <ion-card class=\'box1\'>\n\n    <div>\n      <ion-row>\n        <ion-col col-6>\n          <div>\n            <ion-item>\n              <ion-avatar item-start>\n                <img class="profileicon" src="assets/imgs/fernando.png">\n              </ion-avatar>\n              <h2>Richard G.</h2>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <div>\n            <button ion-button icon-start clear small class=\'btn\'>\n              <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n              16 AGREE!\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-card-content>\n      <p class="textmargin">It just doesn’t seem appropriate to have the same copies of homework </p>\n    </ion-card-content>\n  </ion-card>\n\n\n    <!-- other users -->\n    <ion-card class=\'box1\'>\n\n        <div>\n          <ion-row>\n            <ion-col col-6>\n              <div>\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img class="profileicon" src="assets/imgs/jesus.png">\n                  </ion-avatar>\n                  <h2>Jesus C.</h2>\n                </ion-item>\n              </div>\n            </ion-col >\n            <ion-col col-6>\n              <div>\n                <button ion-button icon-start clear small class=\'btn\'>\n                  <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n                  5 AGREE!\n                </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n    \n        <ion-card-content>\n          <p class="textmargin">It just doesn’t seem appropriate to have the same copies of homework </p>\n        </ion-card-content>\n      </ion-card>\n\n\n        <!-- other users -->\n  <ion-card class=\'box1\' *ngFor="let text of texts">\n\n      <div>\n        <ion-row>\n          <ion-col col-6> \n            <div>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img class="profileicon" src="assets/imgs/profile2.png">\n                </ion-avatar>\n                <h2>{{user.name}}</h2>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div>\n              <button ion-button icon-start clear small (click)="likePost(text)"class=\'btn\'>\n                <ion-icon ios="ios-arrow-dropup" md="md-arrow-dropup"></ion-icon>\n                {{text.likes}} AGREE!\n              </button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n  \n      <ion-card-content>\n        <p class="textmargin">{{ text.text }}</p>\n      </ion-card-content>\n    </ion-card>\n\n  <!-- <ion-row>\n    <form>\n      <div>\n        <input id="post" type="text" placeholder="Let\'s hear your feedback!" [(ngModel)]="newText" [ngModelOptions]="{standalone:true}">\n      </div>\n      <div>\n        <button type="submit" class="postbtn" [value]="btnText" (click)="addPost()">Submit</button>\n      </div>\n    </form>\n  </ion-row> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="footer">\n    <form (ngSubmit)="addPost()" id="custom-input">\n      <ion-row style="margin-top: 34px;">\n        <ion-col col-10 class="type">\n            <ion-item class="custom-input">\n                <ion-input type="text" [(ngModel)]="newText"  name="title" placeholder="Let\'s hear your feedback!"></ion-input>\n              </ion-item>\n        </ion-col>\n        <ion-col col-2 class="type">\n            <button ion-button type="submit" block id="custom-btn">\n              <img src="assets/arrow.png" alt="">\n            </button>\n          </ion-col>\n      </ion-row>\n\n\n\n    </form>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/robertosanchez/Desktop/scla-2018/Educo/src/pages/period/period.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], PeriodPage);
    return PeriodPage;
}());

//# sourceMappingURL=period.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map