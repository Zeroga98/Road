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
import { VehicleService } from '../../../services/vehicle-service';
import { ContractDetailPage } from '../../user/contract-detail/contract-detail';
import { UtilProvider } from '../../../providers/util-provider';
var OwnCarsPage = (function () {
    function OwnCarsPage(nav, navParams, authService, vehicleService, util) {
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.vehicleService = vehicleService;
        this.util = util;
        this.vehicles = undefined;
        this.title = "Mis vehiculos";
    }
    OwnCarsPage.prototype.ionViewDidLoad = function () {
        this.getVehicleAll();
    };
    OwnCarsPage.prototype.getVehicleAll = function () {
        var _this = this;
        this.util.loading();
        this.vehicleService.getVehiclesProvider().subscribe(function (vehicles) {
            _this.vehicles = [];
            if (vehicles != undefined) {
                for (var i = 0; i < vehicles.length; i++) {
                    _this.vehicles.push(vehicles[i]);
                }
                console.log(_this.vehicles);
            }
            _this.util.loadingDismiss();
        }, function (error) {
            _this.util.loadingDismiss();
            _this.vehicles = [];
            console.log(error);
        });
    };
    OwnCarsPage.prototype.goToDetail = function (contract_id) {
        this.nav.push(ContractDetailPage, { contract_id: contract_id });
    };
    return OwnCarsPage;
}());
OwnCarsPage = __decorate([
    Component({
        selector: 'page-own-cars',
        templateUrl: 'own-cars.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        VehicleService,
        UtilProvider])
], OwnCarsPage);
export { OwnCarsPage };
//# sourceMappingURL=own-cars.js.map