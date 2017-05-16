import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import { SignUpPage } from './signup/signup';
import { ProfilePage } from './profile/profile';
import { ListReservePage } from './list-reserve/list-reserve';
import { CutoffDatePage } from './cutoff-date/cutoff-date';


@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage,
		ListReservePage,
		CutoffDatePage
  	],
  	entryComponents: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage,
		ListReservePage,
		CutoffDatePage
  	]
})
export class UserModule {}