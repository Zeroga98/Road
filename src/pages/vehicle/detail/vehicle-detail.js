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
import { VehicleReservePage } from '../reserve/vehicle-reserve';
import { LoginPage } from '../../user/login/login';
import { AuthService } from '../../../services/auth-service';
var VehicleDetailPage = (function () {
    function VehicleDetailPage(nav, navParams, authService, vehicleService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.vehicleService = vehicleService;
        this.search = "";
        this.showSearchBar = false;
        this.authService.isAuthenticated.subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
        });
        this.vehicle = this.navParams.get('vehicle');
        this.authService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
        console.log(this.status);
    }
    VehicleDetailPage.prototype.ionViewDidLoad = function () {
        this.detail();
        console.log(this.vehicle);
    };
    VehicleDetailPage.prototype.goToReserve = function (vehicle) {
        if (this.status) {
            if (this.isAuthenticated) {
                this.nav.push(VehicleReservePage, { vehicle: vehicle });
            }
            else {
                this.nav.push(LoginPage, { vehicle: vehicle });
            }
        }
    };
    VehicleDetailPage.prototype.favorite = function () {
        console.log("favorito!!");
    };
    VehicleDetailPage.prototype.detail = function () {
        var _this = this;
        var email = (this.isAuthenticated) ? this.currentUser.email : '';
        this.vehicleService.getDetaild(this.vehicle.vehiculo_id, email).subscribe(function (vehicle) {
            _this.vehicle.accessories = [];
            if (vehicle[0].accesorios != null) {
                var ac_icon = vehicle[0].ac_iconos.split(",");
                var accessories = vehicle[0].accesorios.split(",");
                for (var i = 0; i < accessories.length; i++) {
                    _this.vehicle.accessories.push({ name: accessories[i], icon: ac_icon[i] });
                }
            }
            _this.vehicle.photos = [];
            if (vehicle[0].fotos != null) {
                _this.vehicle.photos = vehicle[0].fotos.split(",");
            }
            _this.vehicle.alquilado = vehicle[0].alquilado;
            _this.vehicle.empresa_aseguradora = vehicle[0].empresa_aseguradora;
            _this.vehicle.proveedor_apellidos = vehicle[0].proveedor_apellidos;
            _this.vehicle.proveedor_celular = vehicle[0].proveedor_celular;
            _this.vehicle.proveedor_nombres = vehicle[0].proveedor_nombres;
            _this.vehicle.sucursal = vehicle[0].sucursal;
            _this.vehicle.sucursal_departamento = vehicle[0].sucursal_departamento;
            _this.vehicle.sucursal_municipio = vehicle[0].sucursal_municipio;
            _this.vehicle.tipo_direccion = vehicle[0].tipo_direccion;
            _this.status = (_this.vehicle.alquilado != null) ? false : true;
        }, function (error) {
            console.log(error);
        });
    };
    return VehicleDetailPage;
}());
VehicleDetailPage = __decorate([
    Component({
        selector: 'page-vehicleDetailPage',
        templateUrl: 'vehicle-detail.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        VehicleService])
], VehicleDetailPage);
export { VehicleDetailPage };
//# sourceMappingURL=vehicle-detail.js.map