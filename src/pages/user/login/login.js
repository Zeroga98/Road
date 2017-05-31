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
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { UserService } from '../../../services/user-service';
import { MenuService } from '../../../services/menu-service';
import { UtilProvider } from '../../../providers/util-provider';
import { SignUpPage } from '../signup/signup';
import { VehicleListPage } from '../../vehicle/list/vehicle-list';
import { VehicleDetailPage } from '../../vehicle/detail/vehicle-detail';
var LoginPage = (function () {
    function LoginPage(nav, navParams, authService, userService, menuService, util) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.userService = userService;
        this.menuService = menuService;
        this.util = util;
        this.Credentials = { email: '', password: '' };
        this.authService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    }
    LoginPage.prototype.goToSignUp = function () {
        this.nav.push(SignUpPage);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading = this.util.loading();
        this.authService.login(this.Credentials).subscribe(function (response) {
            if (response.token) {
                _this.getUserProfile();
                setTimeout(function () {
                    //Proceso de reserva
                    var vehicle = _this.navParams.get('vehicle');
                    if (vehicle) {
                        _this.nav.push(VehicleDetailPage, { vehicle: vehicle });
                    }
                    else {
                        _this.nav.setRoot(VehicleListPage);
                    }
                });
            }
            else {
                _this.util.presentToast(response);
            }
            _this.loading.dismiss();
        }, function (error) {
            _this.util.presentToast(_this.util.strings.error_connection);
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.getUserProfile = function () {
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
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        UserService,
        MenuService,
        UtilProvider])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map