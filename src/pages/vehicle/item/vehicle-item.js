var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VehicleDetailPage } from '../detail/vehicle-detail';
import { VehicleService } from '../../../services/vehicle-service';
var VehicleItemComponent = (function () {
    function VehicleItemComponent(nav, vehicleService) {
        this.nav = nav;
        this.vehicleService = vehicleService;
    }
    VehicleItemComponent.prototype.favorite = function () {
        if (this.favorito == null) {
            this.favorito = 1;
        }
        else {
            this.favorito = null;
        }
    };
    VehicleItemComponent.prototype.goToDetail = function () {
        this.nav.push(VehicleDetailPage, { vehicle: this.vehicle });
    };
    VehicleItemComponent.prototype.addVehicleFavorites = function () {
        var _this = this;
        var state = (this.favorito != null) ? "delete" : "add";
        var vehicle_id = {
            vehiculo_id: this.vehiculo_id,
            state: state
        };
        console.log(vehicle_id);
        this.vehicleService.addVehicleFavorites(vehicle_id).subscribe(function (response) {
            _this.favorite();
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    return VehicleItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], VehicleItemComponent.prototype, "alquilado", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "auto_nombre", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "descripcion", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], VehicleItemComponent.prototype, "favorito", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "foto_url", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "marca_nombre", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "modelo", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "precio_dia", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], VehicleItemComponent.prototype, "puertas", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], VehicleItemComponent.prototype, "puestos", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "sucursal", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "sucursal_municipio", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "tipo_combustible", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], VehicleItemComponent.prototype, "tipo_transmicion", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], VehicleItemComponent.prototype, "vehiculo_id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], VehicleItemComponent.prototype, "vehicle", void 0);
VehicleItemComponent = __decorate([
    Component({
        selector: 'vehicle-item',
        templateUrl: 'vehicle-item.html'
    }),
    __metadata("design:paramtypes", [NavController,
        VehicleService])
], VehicleItemComponent);
export { VehicleItemComponent };
//# sourceMappingURL=vehicle-item.js.map