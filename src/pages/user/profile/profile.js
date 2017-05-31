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
import { AuthService } from '../../../services/auth-service';
var ProfilePage = (function () {
    function ProfilePage(authService) {
        this.authService = authService;
    }
    /** Nav guard de control de acceso a la vista */
    ProfilePage.prototype.ionViewCanEnter = function () {
        var _this = this;
        /** Suscripción al observable que retornará el estado de sesión */
        this.authService.isAuthenticated.subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
        });
        /** Retorna true o false de acuerdo al estado de la sesión de usuario */
        return this.isAuthenticated ? true : false;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /** Suscripción al observable que retornará los datos del usuario actual */
        this.authService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [AuthService])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map