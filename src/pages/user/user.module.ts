import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import { SignUpPage } from './signup/signup';
import { ProfilePage } from './profile/profile';
import { ListReservePage } from './list-reserve/list-reserve';
//import { CutoffDatePage } from '../provider/cutoff-date/cutoff-date';
import { ContractDetailPage } from './contract-detail/contract-detail';


@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage,
		ListReservePage,
		//CutoffDatePage,
		ContractDetailPage
  	],
  	entryComponents: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage,
		ListReservePage,
		//CutoffDatePage,
		ContractDetailPage
  	]
})
export class UserModule {}