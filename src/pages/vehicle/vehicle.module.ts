import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleListPage } from './list/vehicle-list';

import { VehicleItemComponent } from './item/vehicle-item';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	VehicleListPage,
    	VehicleItemComponent
  	],
  	entryComponents: [
    	VehicleListPage,
    	VehicleItemComponent
  	]
})
export class VehicleModule {}