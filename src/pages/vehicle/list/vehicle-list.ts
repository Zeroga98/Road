import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { VehicleService } from '../../../services/vehicle-service';
import { ProfilePage } from '../../user/profile/profile';
import { VehicleDetailPage } from '../detail/vehicle-detail';
import { UtilProvider } from '../../../providers/util-provider';


@Component({
  selector: 'page-vehicleListPage',
  templateUrl: 'vehicle-list.html'
})
export class VehicleListPage {

  public vehicles: any = [];
  search: string = "";
  showSearchBar: boolean = false;
  public extended: boolean = true;
  private offset: number = 0;
  private limit: number = 3;
  public not_data: boolean = true;


  constructor(
    private nav: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private vehicleService: VehicleService,
    private util: UtilProvider
  ) { }

  ionViewDidLoad() {
    this.getVehicleAll();
  }

  doRefresh(refresher) {
    this.getVehicleAll();
    setTimeout(() => {      
      refresher.complete();
    }, 2000);
  }



  doInfinite(infiniteScroll) {    
    setTimeout(() => {
      if (this.extended) {
        this.vehicleService.getAll(1, this.limit, this.offset).subscribe(
          vehicles => {
            if (this.vehicles.length == 0) {
              this.vehicles = vehicles;
            } else {
              for (let i = 0; i < vehicles.length; i++) {
                this.vehicles.push(vehicles[i]);
              }
            }
            this.offset = this.idHigher(this.vehicles);
            this.extended = (vehicles.length == this.limit);
            console.log(this.vehicles);
          },
          error => {
            console.log(error);
          }
        );
      }
      
      infiniteScroll.complete();
    }, 1500);
  }

  public getVehicleAll() {
    if (this.extended) {
      this.vehicleService.getAll(1, this.limit, this.offset).subscribe(
        vehicles => {   
          console.log(vehicles);   
          if (this.vehicles == undefined) {
            this.not_data = false;
          } else {
            if (this.vehicles.length == 0) {
              this.vehicles = vehicles;
            } else {
              for (let i = 0; i < vehicles.length; i++) {
                this.vehicles.push(vehicles[i]);
              }
            }
          }
          this.offset = this.idHigher(this.vehicles);
          this.extended = (vehicles.length == this.limit);
          this.not_data = true;
        },
        error => {
          if (this.vehicles.length <= 0) {
            this.not_data = false;
          }
          console.log(error);
        }
      );
    }
  }
  

  btnSearch() {
    this.showSearchBar = !this.showSearchBar;
  }

  test(t) {
    console.log(t);
  }

  public goToProfile() {
    this.nav.push(ProfilePage)
  }
  public goToDetail(vehicle: any) {
    this.nav.push(VehicleDetailPage, { vehicle: vehicle })
  }



  private idHigher(array: any) {
    let temp = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i].vehiculo_id > temp) {
        temp = array[i].vehiculo_id;
      }
    }
    return temp;
  }
}