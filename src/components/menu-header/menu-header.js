var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { LoginPage } from '../../pages/user/login/login';
import { SignUpPage } from '../../pages/user/signup/signup';
import { VehicleListPage } from '../../pages/vehicle/list/vehicle-list';
import { AuthService } from '../../services/auth-service';
import { MenuService } from '../../services/menu-service';
var MenuHeaderComponent = (function () {
    function MenuHeaderComponent(appCtrl, authService, menuService) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.authService = authService;
        this.menuService = menuService;
        /** Suscripción al observable que retornará el estado de sesión */
        this.authService.isAuthenticated.subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
        });
        /** Suscripción al observable que retornará los datos del usuario actual */
        this.authService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    }
    /** Acciones de los botones en el header del menú  */
    MenuHeaderComponent.prototype.Login = function () {
        this.appCtrl.getRootNav().setRoot(LoginPage);
    };
    MenuHeaderComponent.prototype.SignUp = function () {
        this.appCtrl.getRootNav().setRoot(SignUpPage);
    };
    MenuHeaderComponent.prototype.Logout = function () {
        this.authService.logout();
        this.menuService.resetMenu();
        this.appCtrl.getRootNav().setRoot(VehicleListPage);
    };
    return MenuHeaderComponent;
}());
MenuHeaderComponent = __decorate([
    Component({
        selector: 'menu-header',
        templateUrl: 'menu-header.html'
    }),
    __metadata("design:paramtypes", [App,
        AuthService,
        MenuService])
], MenuHeaderComponent);
export { MenuHeaderComponent };
//# sourceMappingURL=menu-header.js.map