import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListPage } from './user-list/user-list';
import { ReserveListPage } from './reserve-list/reserve-list';
import { ReserveDetailPage } from './reserve-detail/reserve-detail';
import { ResDetailComponent } from '../../components/res-detail/res-detail';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
		ReserveListPage,
		UserListPage,
		ReserveDetailPage,
		ResDetailComponent
  	],
  	entryComponents: [    
		ReserveListPage,
		UserListPage,
		ReserveDetailPage,
		ResDetailComponent
  	]
})
export class AdminModule {}
