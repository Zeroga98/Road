import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListPage } from './user-list/user-list';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
		UserListPage
  	],
  	entryComponents: [    
		UserListPage
  	]
})
export class AdminModule {}
