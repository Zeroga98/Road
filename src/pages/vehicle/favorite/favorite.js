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
import { VehicleDetailPage } from '../detail/vehicle-detail';
import { UtilProvider } from '../../../providers/util-provider';
var FavoritePage = (function () {
    function FavoritePage(nav, navParams, authService, vehicleService, util) {
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.vehicleService = vehicleService;
        this.util = util;
        this.vehicles = undefined;
        this.favorito = null;
    }
    FavoritePage.prototype.ionViewDidLoad = function () {
        this.getVehicleAll();
    };
    /*------------------------------------*\
      $FUNTIONS
    \*------------------------------------*/
    FavoritePage.prototype.favorite = function () {
        if (this.favorito == null) {
            this.favorito = 1;
        }
        else {
            this.favorito = null;
        }
    };
    FavoritePage.prototype.removeFavorite = function (vehicle, index) {
        var _this = this;
        var vehicle_id = {
            vehiculo_id: vehicle.vehiculo_id,
            state: "delete"
        };
        this.vehicleService.addVehicleFavorites(vehicle_id).subscribe(function (response) {
            _this.vehicles.splice(index, 1);
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    /*------------------------------------*\
      $PETITION
    \*------------------------------------*/
    FavoritePage.prototype.getVehicleAll = function () {
        var _this = this;
        this.util.loading();
        this.vehicleService.getVehicleFavorites().subscribe(function (vehicles) {
            _this.vehicles = [];
            //console.log(vehicles);
            _this.vehicles = vehicles;
            _this.util.loadingDismiss();
        }, function (error) {
            _this.util.showError('Oops', _this.util.strings.modal_error_connection);
            _this.util.loadingDismiss();
            console.log(error);
        });
    };
    /*------------------------------------*\
      $NAV.PUSH
    \*------------------------------------*/
    FavoritePage.prototype.goToDetail = function (vehicle) {
        this.nav.push(VehicleDetailPage, { vehicle: vehicle });
    };
    return FavoritePage;
}());
FavoritePage = __decorate([
    Component({
        selector: 'page-favorite',
        templateUrl: 'favorite.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        VehicleService,
        UtilProvider])
], FavoritePage);
export { FavoritePage };
//# sourceMappingURL=favorite.js.map