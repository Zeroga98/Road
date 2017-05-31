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
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { UserService } from '../../../services/user-service';
import { ReserveDetailPage } from '../../user/reserve-detail/reserve-detail';
import { UtilProvider } from '../../../providers/util-provider';
var MyReservationsPage = (function () {
    function MyReservationsPage(nav, navParams, authService, userService, util) {
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.userService = userService;
        this.util = util;
        this.reserves = undefined;
        this.historys = undefined;
        this.index = 0;
    }
    MyReservationsPage.prototype.ionViewDidLoad = function () {
        this.getClientReserve('false');
        this.getClientReserve('true');
    };
    MyReservationsPage.prototype.getClientReserve = function (history) {
        var _this = this;
        this.util.loading();
        this.userService.getReserveClient(history).subscribe(function (data) {
            if (history == 'true') {
                _this.historys = [];
            }
            else {
                _this.reserves = [];
            }
            if (data != undefined && data.length > 0) {
                if (history == 'true') {
                    _this.historys = data;
                }
                else {
                    _this.reserves = data;
                }
                console.log(_this.reserves);
            }
            _this.util.loadingDismiss();
        }, function (error) {
            _this.reserves = [];
            _this.util.loadingDismiss();
            console.log(error);
        });
    };
    MyReservationsPage.prototype.goToDetail = function (reserve) {
        this.nav.push(ReserveDetailPage, { reserve: reserve });
    };
    MyReservationsPage.prototype.slideChanged = function () {
        this.index = this.slides.getActiveIndex();
        console.log(this.index);
        //this.index = i;
    };
    return MyReservationsPage;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], MyReservationsPage.prototype, "slides", void 0);
MyReservationsPage = __decorate([
    Component({
        selector: 'page-myreservations',
        templateUrl: 'my_reservations.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        UserService,
        UtilProvider])
], MyReservationsPage);
export { MyReservationsPage };
//# sourceMappingURL=my_reservations.js.map