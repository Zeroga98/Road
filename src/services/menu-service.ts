import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from './api-service';

//Pages
import { VehicleListPage } from '../pages/vehicle/list/vehicle-list';
import { ProfilePage } from '../pages/user/profile/profile';

@Injectable()
export class MenuService {

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public apiService: ApiService) {

	  this.pages = [
	    { title: 'Reservar un coche', component: VehicleListPage, icon:'car' },
	    { title: 'Mi cuenta', component: ProfilePage, icon: 'person'}
	  ];
  }

  public getMenu() {
  	return this.pages;
  }
}
