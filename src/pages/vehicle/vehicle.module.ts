import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleListPage } from './list/vehicle-list';
import { VehicleDetailPage } from './detail/vehicle-detail';
import { VehicleReservePage } from './reserve/vehicle-reserve';
import { ConfirmReservePage } from './confirm_reserve/confirm-reserve';


import { VehicleItemComponent } from './item/vehicle-item';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	VehicleListPage,
    	VehicleItemComponent,
		VehicleDetailPage,
		VehicleReservePage,
		ConfirmReservePage
  	],
  	entryComponents: [
    	VehicleListPage,
    	VehicleItemComponent,
		VehicleDetailPage,
		VehicleReservePage,
		ConfirmReservePage
  	]
})
export class VehicleModule {}