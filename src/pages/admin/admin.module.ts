import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListPage } from './user-list/user-list';
import { ReserveListPage } from './reserve-list/reserve-list';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
		ReserveListPage,
		UserListPage
  	],
  	entryComponents: [    
		ReserveListPage,
		UserListPage
  	]
})
export class AdminModule {}
