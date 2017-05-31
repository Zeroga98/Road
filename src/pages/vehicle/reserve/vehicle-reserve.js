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
import { ProfilePage } from '../../user/profile/profile';
import { ConfirmReservePage } from '../../vehicle/confirm_reserve/confirm-reserve';
import { UtilProvider } from '../../../providers/util-provider';
var VehicleReservePage = (function () {
    function VehicleReservePage(nav, navParams, vehicleService, util) {
        this.nav = nav;
        this.navParams = navParams;
        this.vehicleService = vehicleService;
        this.util = util;
        this.search = "";
        this.showSearchBar = false;
        this.driver = false;
        this.sameSite = false;
        this.limitInitDate = new Date();
        this.dateOut = this.sumday(this.limitInitDate, 2).toISOString().substring(0, 10);
        this.dateIn = this.limitInitDate.toISOString().substring(0, 10);
        this.dateOutMin = this.sumday(this.limitInitDate, 2).toISOString().substring(0, 10);
        this.dateInMin = this.limitInitDate.toISOString().substring(0, 10);
        console.log(this.dateOut);
    }
    VehicleReservePage.prototype.ionViewDidLoad = function () {
        this.vehicle = this.navParams.get('vehicle');
        this.getBranchs();
        this.getVehicleReserveDates();
    };
    VehicleReservePage.prototype.sumday = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    VehicleReservePage.prototype.sumdateout = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days + 1);
        this.dateOutMin = (new Date(date) > new Date(this.dateOut)) ? result.toISOString().substring(0, 10) : this.dateOutMin;
        this.dateOut = (new Date(date) > new Date(this.dateOut)) ? result.toISOString().substring(0, 10) : this.dateOutMin;
    };
    VehicleReservePage.prototype.getBranchs = function () {
        var _this = this;
        this.loading = this.util.loading();
        this.vehicleService.getBranchs().subscribe(function (response) {
            setTimeout(function () {
                _this.branchs = response;
                _this.branch_destiny = _this.branchs[0].id;
                console.log(response);
                var loadin_dismiss = _this.util.loadingDismiss();
            });
        }, function (error) {
            _this.util.showError('Oops', _this.util.strings.modal_error_connection);
            var loadin_dismiss = _this.util.loadingDismiss();
        });
    };
    VehicleReservePage.prototype.getVehicleReserveDates = function () {
        var _this = this;
        this.loading = this.util.loading();
        this.vehicleService.getVehicleReserveDates(this.vehicle.vehiculo_id).subscribe(function (response) {
            setTimeout(function () {
                _this.reserveDates = response;
                _this.verifyDates(_this.dateIn, _this.dateOut);
                console.log(response);
                var loadin_dismiss = _this.util.loadingDismiss();
            });
        }, function (error) {
            _this.util.showError('Oops', _this.util.strings.modal_error_connection);
            var loadin_dismiss = _this.util.loadingDismiss();
        });
    };
    VehicleReservePage.prototype.verifyDates = function (d1, d2) {
        var date1 = new Date(d1);
        var date2 = new Date(d2);
        date1.setDate(date1.getDate() + 1);
        date2.setDate(date2.getDate() + 1);
        for (var i = 0; i < this.reserveDates.length; i++) {
            var daIn = new Date(this.reserveDates[i].fecha_inicia_proceso);
            var daOut = new Date(this.reserveDates[i].fecha_final_proceso);
            console.log(date1);
            console.log(daOut);
            if (date1 >= daIn && date1 <= daOut || date2 >= daIn && date2 <= daOut) {
                this.validate = true;
                this.util.showError('Lo sentimos', 'Este vehiculo ya esta reservado para esta fecha.');
                break;
            }
            else {
                this.validate = false;
            }
        }
    };
    VehicleReservePage.prototype.btnSearch = function () {
        this.showSearchBar = !this.showSearchBar;
    };
    VehicleReservePage.prototype.goToProfile = function () {
        this.nav.push(ProfilePage);
    };
    VehicleReservePage.prototype.goConfirm = function () {
        var request = {
            fecha_inicio: this.dateIn,
            fecha_fin: this.dateOut,
            sucursal_entrega: this.branch_destiny + '',
            vehiculo_id: this.vehicle.vehiculo_id + '',
            sucursal_id: this.vehicle.sucursal_id + '',
            conductor: (this.driver ? '1' : '0')
        };
        this.nav.push(ConfirmReservePage, { request: request, vehicle: this.vehicle });
    };
    return VehicleReservePage;
}());
VehicleReservePage = __decorate([
    Component({
        selector: 'page-reserve',
        templateUrl: 'vehicle-reserve.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        VehicleService,
        UtilProvider])
], VehicleReservePage);
export { VehicleReservePage };
//# sourceMappingURL=vehicle-reserve.js.map