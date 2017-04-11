import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import { SignUpPage } from './signup/signup';
import { ProfilePage } from './profile/profile';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage
  	],
  	entryComponents: [
    	LoginPage,
    	SignUpPage,
    	ProfilePage
  	]
})
export class UserModule {}