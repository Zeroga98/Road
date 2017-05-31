var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleListPage } from './list/vehicle-list';
import { FavoritePage } from './favorite/favorite';
import { VehicleDetailPage } from './detail/vehicle-detail';
import { VehicleReservePage } from './reserve/vehicle-reserve';
import { ConfirmReservePage } from './confirm_reserve/confirm-reserve';
import { MyReservationsPage } from './my_reservations/my_reservations';
import { OwnCarsPage } from './own-cars/own-cars';
import { SelecDatePage } from './select_date/select_date';
import { NotDataComponent } from '../../components/not-data/not-data';
import { HeaderComponent } from '../../components/header/header';
import { VehicleItemComponent } from './item/vehicle-item';
var VehicleModule = (function () {
    function VehicleModule() {
    }
    return VehicleModule;
}());
VehicleModule = __decorate([
    NgModule({
        imports: [IonicPageModule],
        declarations: [
            VehicleListPage,
            FavoritePage,
            VehicleItemComponent,
            VehicleDetailPage,
            VehicleReservePage,
            ConfirmReservePage,
            MyReservationsPage,
            OwnCarsPage,
            NotDataComponent,
            HeaderComponent,
            SelecDatePage
        ],
        entryComponents: [
            VehicleListPage,
            FavoritePage,
            VehicleItemComponent,
            VehicleDetailPage,
            VehicleReservePage,
            ConfirmReservePage,
            MyReservationsPage,
            OwnCarsPage,
            NotDataComponent,
            HeaderComponent,
            SelecDatePage
        ]
    })
], VehicleModule);
export { VehicleModule };
//# sourceMappingURL=vehicle.module.js.map