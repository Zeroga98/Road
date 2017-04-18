import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import { SignUpPage } from './signup/signup';
import { ProfilePage } from './profile/profile';
import { ListReservePage } from './list-reserve/list-reserve';


@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage,
		ListReservePage
  	],
  	entryComponents: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage,
		ListReservePage
  	]
})
export class UserModule {}