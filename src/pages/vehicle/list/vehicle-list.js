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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { VehicleService } from '../../../services/vehicle-service';
import { ProfilePage } from '../../user/profile/profile';
import { VehicleDetailPage } from '../detail/vehicle-detail';
import { UtilProvider } from '../../../providers/util-provider';
import { SelecDatePage } from '../select_date/select_date';
var VehicleListPage = (function () {
    function VehicleListPage(nav, navParams, authService, vehicleService, util, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.vehicleService = vehicleService;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.vehicles = [];
        this.search = "";
        this.showSearchBar = false;
        this.extended = true;
        this.offset = 0;
        this.limit = 3;
        this.not_data = true;
    }
    VehicleListPage.prototype.ionViewDidLoad = function () {
        this.getVehicleAll();
    };
    /*------------------------------------*\
        $FUNTIONS
    \*------------------------------------*/
    VehicleListPage.prototype.btnSearch = function () {
        this.showSearchBar = !this.showSearchBar;
    };
    VehicleListPage.prototype.idHigher = function (array) {
        var temp = -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i].vehiculo_id > temp) {
                temp = array[i].vehiculo_id;
            }
        }
        return temp;
    };
    /*------------------------------------*\
        $MODAL
    \*------------------------------------*/
    VehicleListPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create(SelecDatePage, { params: '...' }, { enableBackdropDismiss: true, showBackdrop: true });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
        });
        profileModal.present();
    };
    /*------------------------------------*\
        $REFRESH
    \*------------------------------------*/
    VehicleListPage.prototype.doRefresh = function (refresher) {
        this.getVehicleAll();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    VehicleListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.extended) {
                _this.vehicleService.getAll(1, _this.limit, _this.offset).subscribe(function (vehicles) {
                    if (_this.vehicles.length == 0) {
                        _this.vehicles = vehicles;
                    }
                    else {
                        for (var i = 0; i < vehicles.length; i++) {
                            _this.vehicles.push(vehicles[i]);
                        }
                    }
                    _this.offset = _this.idHigher(_this.vehicles);
                    _this.extended = (vehicles.length == _this.limit);
                    console.log(_this.vehicles);
                }, function (error) {
                    console.log(error);
                });
            }
            infiniteScroll.complete();
        }, 1500);
    };
    /*------------------------------------*\
        $PETITION
    \*------------------------------------*/
    VehicleListPage.prototype.getVehicleAll = function () {
        var _this = this;
        if (this.extended) {
            this.util.loading();
            this.vehicleService.getAll(1, this.limit, this.offset).subscribe(function (vehicles) {
                console.log(vehicles);
                if (_this.vehicles == undefined) {
                    _this.not_data = false;
                }
                else {
                    if (_this.vehicles.length == 0) {
                        _this.vehicles = vehicles;
                    }
                    else {
                        for (var i = 0; i < vehicles.length; i++) {
                            _this.vehicles.push(vehicles[i]);
                        }
                    }
                }
                _this.offset = _this.idHigher(_this.vehicles);
                _this.extended = (vehicles.length == _this.limit);
                _this.not_data = true;
                _this.util.loadingDismiss();
            }, function (error) {
                _this.util.showError('Oops', _this.util.strings.modal_error_connection);
                _this.util.loadingDismiss();
                if (_this.vehicles.length <= 0) {
                    _this.not_data = false;
                }
                console.log(error);
            });
        }
    };
    /*------------------------------------*\
        $NAV.PUSH
    \*------------------------------------*/
    VehicleListPage.prototype.goToProfile = function () {
        this.nav.push(ProfilePage);
    };
    VehicleListPage.prototype.goToDetail = function (vehicle) {
        this.nav.push(VehicleDetailPage, { vehicle: vehicle });
    };
    return VehicleListPage;
}());
VehicleListPage = __decorate([
    Component({
        selector: 'page-vehicleListPage',
        templateUrl: 'vehicle-list.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        VehicleService,
        UtilProvider,
        ModalController])
], VehicleListPage);
export { VehicleListPage };
//# sourceMappingURL=vehicle-list.js.map