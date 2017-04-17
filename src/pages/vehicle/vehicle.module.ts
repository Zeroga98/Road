import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleListPage } from './list/vehicle-list';
import { VehicleDetailPage } from './detail/vehicle-detail';

import { VehicleItemComponent } from './item/vehicle-item';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	VehicleListPage,
    	VehicleItemComponent,
		VehicleDetailPage
  	],
  	entryComponents: [
    	VehicleListPage,
    	VehicleItemComponent,
		VehicleDetailPage
  	]
})
export class VehicleModule {}