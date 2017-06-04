import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterUserPage } from './register-user/register-user';

@NgModule({
	imports: [IonicPageModule],
  	declarations: [
		RegisterUserPage
  	],
  	entryComponents: [    
		RegisterUserPage
  	]
})

export class EmployeeModule {}
