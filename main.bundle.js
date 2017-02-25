webpackJsonp([1,5],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(583),
            styles: [__webpack_require__(571)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/ksv/Public/keshav/src/home.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nasa_service__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NasaComponent = (function () {
    function NasaComponent(_nasaService) {
        this._nasaService = _nasaService;
        this.pic = { img_src: '/assets/images/background.jpg' };
        this.isLoaded = false;
    }
    NasaComponent.prototype.ngOnInit = function () {
        this.initial = Math.floor(Math.random() * 600) + 1;
        this.getAllItems();
    };
    NasaComponent.prototype.getAllItems = function () {
        var _this = this;
        this._nasaService
            .getData()
            .subscribe(function (data) {
            _this.photos = data.photos.slice(_this.initial, _this.initial + 100);
            console.log(_this.photos);
            _this.pic = _this.photos[0];
            _this.isLoaded = true;
        });
    };
    NasaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nasa',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_nasa_service__["a" /* NasaService */]],
            template: __webpack_require__(584),
            styles: [__webpack_require__(572)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nasa_service__["a" /* NasaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_nasa_service__["a" /* NasaService */]) === 'function' && _a) || Object])
    ], NasaComponent);
    return NasaComponent;
    var _a;
}());
//# sourceMappingURL=/home/ksv/Public/keshav/src/nasa.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NasaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NasaService = (function () {
    function NasaService(http) {
        this.http = http;
        this.nasa_api = 'KD8tUtHEESSvE0E4lZvoBfqEjydSG0qwtChJixct';
        this.url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&&page=2&api_key=';
    }
    NasaService.prototype.getData = function () {
        return this.http.get(this.url + this.nasa_api)
            .map(function (res) { return res.json(); });
    };
    NasaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], NasaService);
    return NasaService;
    var _a;
}());
//# sourceMappingURL=/home/ksv/Public/keshav/src/nasa.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(515);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ksv/Public/keshav/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(582),
            styles: [__webpack_require__(570)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ksv/Public/keshav/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_nasa_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navmenu_navmenu_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nasa_nasa_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__approutes__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navmenu_navmenu_component__["a" /* NavmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_nasa_nasa_component__["a" /* NasaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__approutes__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_lazyload_image__["LazyLoadImageModule"]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_nasa_service__["a" /* NasaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ksv/Public/keshav/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nasa_nasa_component__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'mars', component: __WEBPACK_IMPORTED_MODULE_2__components_nasa_nasa_component__["a" /* NasaComponent */] },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/ksv/Public/keshav/src/approutes.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent.prototype.grabCV = function () {
        window.open('https://drive.google.com/file/d/0B37Q7qCZrgaFVlVnVXRvck52N2M/view?usp=sharing');
    };
    NavmenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navmenu',
            template: __webpack_require__(585),
            styles: [__webpack_require__(573)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());
//# sourceMappingURL=/home/ksv/Public/keshav/src/navmenu.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ksv/Public/keshav/src/environment.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "body{\n    margin: 0px 0px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "* { box-sizing: border-box; }\n.video-background {\n  background: #000;\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  z-index: -99;\n}\n.video-foreground,\n.video-background iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n#vidtop-content {\n\ttop: 10;\n\tcolor: #fff;\n}\n.vid-info { position: absolute; top: 20; right: 0; width: 33%; background: rgba(0,0,0,0.3); color: #fff; padding: 1rem; font-family: Avenir, Helvetica, sans-serif; }\n.vid-info h1 { font-size: 2rem; font-weight: 700; margin-top: 0; line-height: 1.2; }\n.vid-info a { display: block; color: #fff; text-decoration: none; background: rgba(0,0,0,0.5); -webkit-transition: .6s background; transition: .6s background; border-bottom: none; margin: 1rem auto; text-align: center; }\n@media (min-aspect-ratio: 16/9) {\n  .video-foreground { height: 300%; top: -100%; }\n}\n@media (max-aspect-ratio: 16/9) {\n  .video-foreground { width: 300%; left: -100%; }\n}\n@media all and (max-width: 600px) {\n.vid-info { width: 50%; padding: .5rem; }\n.vid-info h1 { margin-bottom: .2rem; }\n}\n@media all and (max-width: 500px) {\n.vid-info .acronym { display: none; }\n}\n\n.jumbotron{\n  margin-top: 10rem; \n  background-color: rgba(236,238,239, 0.8);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, ".carousel{\n    overflow:hidden;\n    width:100%;\n}\n.slides{\n    list-style:none;\n    position:relative;\n    width:500%; /* Number of panes * 100% */\n    overflow:hidden; /* Clear floats */\n        /* Slide effect Animations*/\n    -webkit-animation:carousel 30s infinite;\n    animation:carousel 30s infinite;\n}\n.slides > li{\n    position:relative;\n    float:left;\n    width: 25%; /* 100 / number of panes */\n}\n.carousel img{\n    display:block;\n    width:100%;\n    max-width:100%;\n}\n.carousel h2{\n    margin-bottom: 0;\n    font-size:1em;\n    padding:1.5em 0.5em 1.5em 0.5em;\n    position:absolute;\n    right:0px;\n    bottom:0px;\n    left:0px;\n    text-align:center;\n    color:#fff;\n    background-color:rgba(0,0,0,0.75);\n    text-transform: uppercase;\n}\n\n@-webkit-keyframes carousel{\n    0%    { left:-5%; }\n    11%   { left:-5%; }\n    12.5% { left:-105%; }\n    23.5% { left:-105%; }\n    25%   { left:-205%; }\n    36%   { left:-205%; }\n    37.5% { left:-305%; }\n    48.5% { left:-305%; }\n    50%   { left:-405%; }\n    61%   { left:-405%; }\n    62.5% { left:-305%; }\n    73.5% { left:-305%; }\n    75%   { left:-205%; }\n    86%   { left:-205%; }\n    87.5% { left:-105%; }\n    98.5% { left:-105%; }\n    100%  { left:-5%; }\n}\n\n@keyframes carousel{\n    0%    { left:-5%; }\n    11%   { left:-5%; }\n    12.5% { left:-105%; }\n    23.5% { left:-105%; }\n    25%   { left:-205%; }\n    36%   { left:-205%; }\n    37.5% { left:-305%; }\n    48.5% { left:-305%; }\n    50%   { left:-405%; }\n    61%   { left:-405%; }\n    62.5% { left:-305%; }\n    73.5% { left:-305%; }\n    75%   { left:-205%; }\n    86%   { left:-205%; }\n    87.5% { left:-105%; }\n    98.5% { left:-105%; }\n    100%  { left:-5%; }\n}\n\n.content{\n\tbackground-position: center center;\n\tbackground-repeat:  no-repeat;\n\tbackground-attachment: fixed;\n\tbackground-size:  cover;\n\tbackground-color: #999;\n    height: 100em;\n    background-image: url('/assets/images/background.jpg');\n    width: 100%;\n    padding-top: 2.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, "nav .navbar .navbar-toggleable-md{\n    margin-top: 0px 0px !important;\n    background: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<app-navmenu></app-navmenu>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-background\">\n    <div class=\"video-foreground\">\n      <iframe src=\"https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ\" frameborder=\"0\" allowfullscreen>\n      </iframe>\n    </div>\n</div>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-3\">Keshav Bist</h1>\n    <p class=\"lead text-justify\">\n      Keshav is glad that you are here to explore. This app is created using angular2 framework.\n       Keshav, don't do much about front end designs because he is backend developer, expertise in \n      Java enterprise and Grails framework. But he likes to explore new technologies, so here is one of his experiment.\n      If you are planning to develop web service that need to be robust and need big data management,\n      drop mail to Keshav, he can blend java and big-data technologies for you.\n    </p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary\" href=\"#\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n</div> "

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div *ngIf=\"!isLoaded\">\n        <div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"container\">\n                <h1 class=\"display-3\"> Welcome to mars ! </h1>\n                <p class=\"lead\"> This page loads the random photos of the mars from NASA website. Stay tuned. </p>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"isLoaded\" class=\"container\">\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" role=\"listbox\" style=\" width:100%; height: 35rem !important;\">\n                <div class=\"carousel-item active\">\n                    <img class=\"d-block img-fluid\" src=\"{{pic.img_src}}\" alt=\"First slide\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                        <h3>Mission Robot: {{pic.rover.name}}</h3>\n                        <p>\n                            This picture was taken on {{pic.earth_date}} using {{pic.camera.full_name}}.\n                            The mission was launched on {{pic.rover.launch_date}} and it landed on mars on {{pic.rover.landing_date}}.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"carousel-item\" *ngFor=\"let photo of photos\">\n                    <img class=\"d-block img-fluid\" src=\"{{photo.img_src}}\" alt=\"Second slide\">\n                    <div class=\"carousel-caption d-none d-md-block\">\n                        <h3>Mission Robot: {{photo.rover.name}}</h3>\n                        <p>\n                            This picture was taken on {{photo.earth_date}} using {{photo.camera.full_name}}.\n                            The mission was launched on {{photo.rover.launch_date}} and it landed on mars on {{photo.rover.landing_date}}.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top navbar-toggleable-md navbar-light bg-faded\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"/\">KB | Keshav</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/mars\" routerLinkActive=\"active\">Mars<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"grabCV()\">Download CV</button>\n  </div>\n  </div>\n</nav>"

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[842]);
//# sourceMappingURL=main.bundle.js.map