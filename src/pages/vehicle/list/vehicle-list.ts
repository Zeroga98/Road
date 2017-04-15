import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';
import { VehicleService } from '../../../providers/vehicle-service';
import { ProfilePage } from '../../user/profile/profile';

@Component({
  selector: 'page-vehicleListPage',
  templateUrl: 'vehicle-list.html'
})
export class VehicleListPage {

  vehicles: any;
  search: string ="";
  showSearchBar: boolean = false; 

  constructor(
    private nav: NavController, 
    private authService: AuthService,
    private vehicleService: VehicleService,
  ) {}

  ionViewDidLoad() {
    this.vehicleService.getAll().subscribe(
      vehicles => {
        this.vehicles = vehicles;
      },
      error => {
        console.log(error);
      }
    )
  }
  btnSearch(){
    this.showSearchBar = !this.showSearchBar;
  }

  test(t){
    console.log(t);
  }
    public goToProfile() {
    this.nav.push(ProfilePage)
  }
}