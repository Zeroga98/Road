import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from './api-service';

//Pages
import { VehicleListPage } from '../pages/vehicle/list/vehicle-list';
import { ProfilePage } from '../pages/user/profile/profile';

@Injectable()
export class MenuService {

  pages: Array<{title: string, component: any, icon: string, access: string}>;

  constructor(public apiService: ApiService) {
	  this.pages = [
      { title: 'Reservar un coche', component: VehicleListPage, icon:'car', access: 'public' },
      { title: 'Mi cuenta', component: ProfilePage, icon: 'person', access: 'public'}
    ];
  }

  public getMenu() {
  	return this.pages;
  }

  public configMenu(rol: string){
    let rols = rol.split("-");
    for (var i = 0; i < rols.length; ++i) {
      if(rols[i] == 'cliente'){
        this.rolClient();
      } else if(rols[i] == 'admin'){
        this.rolAdmin();
      } else if(rols[i] == 'proveedor'){
        this.rolProvider();
      } else if(rols[i] == 'empleado'){
        this.rolEmployee();
      }
    }
  }

  public resetMenu(){
    let i = 0;
    while(i < this.pages.length){
      if(this.pages[i].access != 'public'){
        this.pages.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  private rolClient(){
    this.pages.push({ title: 'Cliente 1', component: VehicleListPage, icon:'car', access: 'client' });
  }

  private rolAdmin(){
    this.pages.push({ title: 'Admin 1', component: VehicleListPage, icon:'car', access: 'admin' });
  }

  private rolProvider(){
    this.pages.push({ title: 'Proveedor 1', component: VehicleListPage, icon:'car', access: 'provider' });
  }

  private rolEmployee(){
    this.pages.push({ title: 'Empleado 1', component: VehicleListPage, icon:'car', access: 'employee' });
  }
}
