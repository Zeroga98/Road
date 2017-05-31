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
import { VehicleService } from '../../../services/vehicle-service';
import { VehicleListPage } from '../list/vehicle-list';
import { UtilProvider } from '../../../providers/util-provider';
var ConfirmReservePage = (function () {
    function ConfirmReservePage(nav, navParams, vehicleService, util) {
        this.nav = nav;
        this.navParams = navParams;
        this.vehicleService = vehicleService;
        this.util = util;
        this.request = [];
        this.vehicle = [];
    }
    ConfirmReservePage.prototype.ionViewDidLoad = function () {
        this.request = this.navParams.get('request');
        this.vehicle = this.navParams.get('vehicle');
    };
    ConfirmReservePage.prototype.confirm = function () {
        var _this = this;
        this.loading = this.util.loading();
        this.vehicleService.reserveVehicle(this.request).subscribe(function (response) {
            if (response[0].status == 'OK') {
                _this.nav.setRoot(VehicleListPage);
                _this.util.showError('Solicitado', 'Te esperamos en nuestra sucursal.');
            }
            else {
                _this.util.showError('No disponible', response[0].description);
            }
            _this.loading.dismiss();
        }, function (error) {
            _this.util.showError('Oops', _this.util.strings.modal_error_connection);
            _this.loading.dismiss();
        });
    };
    return ConfirmReservePage;
}());
ConfirmReservePage = __decorate([
    Component({
        selector: 'page-confirm-reserve',
        templateUrl: 'confirm-reserve.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        VehicleService,
        UtilProvider])
], ConfirmReservePage);
export { ConfirmReservePage };
//# sourceMappingURL=confirm-reserve.js.map