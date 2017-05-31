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
import { NavController } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { VehicleListPage } from '../../vehicle/list/vehicle-list';
import { UtilProvider } from '../../../providers/util-provider';
var SignUpPage = (function () {
    function SignUpPage(nav, authService, util) {
        this.nav = nav;
        this.authService = authService;
        this.util = util;
        this.User = { empresa_id: 1, nombres: '', apellidos: '', email: '', password: '' };
    }
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        this.loading = this.util.loading();
        this.authService.signUp(this.User).subscribe(function (response) {
            if (response.token) {
                setTimeout(function () {
                    _this.nav.setRoot(VehicleListPage);
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
    return SignUpPage;
}());
SignUpPage = __decorate([
    Component({
        selector: 'page-signup',
        templateUrl: 'signup.html',
    }),
    __metadata("design:paramtypes", [NavController,
        AuthService,
        UtilProvider])
], SignUpPage);
export { SignUpPage };
//# sourceMappingURL=signup.js.map