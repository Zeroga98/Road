var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { VehicleListPage } from '../pages/vehicle/list/vehicle-list';
import { MenuService } from '../services/menu-service';
import { AuthService } from '../services/auth-service';
import { UserService } from '../services/user-service';
import { LoginPage } from '../pages/user/login/login';
var Road = (function () {
    function Road(authService, userService, platform, menuService, appCtrl) {
        this.authService = authService;
        this.userService = userService;
        this.platform = platform;
        this.menuService = menuService;
        this.appCtrl = appCtrl;
        this.rootPage = VehicleListPage;
        this.getUserProfile();
        this.initializeApp();
    }
    Road.prototype.initializeApp = function () {
        var _this = this;
        this.authService.populate();
        this.pages = this.menuService.getMenu();
        this.platform.ready().then(function () {
            StatusBar.overlaysWebView(true);
            StatusBar.styleLightContent();
            StatusBar.backgroundColorByHexString('#D32E2E');
            Splashscreen.hide();
        });
        this.authService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    Road.prototype.openPage = function (page) {
        var _this = this;
        this.appCtrl.getRootNav().setRoot(page.component).catch(function (err) {
            console.log(err);
            _this.appCtrl.getRootNav().setRoot(LoginPage);
        });
    };
    Road.prototype.getUserProfile = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (data) {
            console.log(data);
            if (data != undefined && data[0].status != 'ERROR') {
                _this.menuService.configMenu(data[0].rol_nombre);
                _this.currentUser.foto = data[0].foto;
                _this.currentUser.genero = data[0].genero;
                _this.currentUser.lastname = data[0].lastname;
                _this.currentUser.celular = data[0].celular;
                _this.currentUser.rol_nombre = data[0].rol_nombre;
                _this.currentUser.tipo = data[0].tipo;
                _this.authService.setCurrentUser(_this.currentUser);
            }
            else if (data[0].type == 'token_null') {
                console.log("No esta logeado");
            }
        }, function (error) {
            console.log(error);
        });
    };
    return Road;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], Road.prototype, "nav", void 0);
Road = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [AuthService,
        UserService,
        Platform,
        MenuService,
        App])
], Road);
export { Road };
//# sourceMappingURL=app.component.js.map