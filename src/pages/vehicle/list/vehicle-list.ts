import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';
import { VehicleService } from '../../../providers/vehicle-service';

@Component({
  selector: 'page-vehicleListPage',
  templateUrl: 'vehicle-list.html'
})
export class VehicleListPage {

  vehicles: any;

  constructor(
    private nav: NavController, 
    private authService: AuthService,
    private vehicleService: VehicleService
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
  
}