import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VehicleService } from '../../../services/vehicle-service';
import { ProfilePage } from '../../user/profile/profile';
import { ConfirmReservePage } from '../../vehicle/confirm_reserve/confirm-reserve';
import { UtilProvider } from '../../../providers/util-provider';

@Component({
  selector: 'page-reserve',
  templateUrl: 'vehicle-reserve.html',
})
export class VehicleReservePage {

  private loading: any;
  search: string = "";
  showSearchBar: boolean = false;
  vehicle: any;
  public driver: boolean = false;
  public branchs: any;
  public branch_destiny: any;
  sameSite: boolean = false;
  public limitInitDate: any = new Date();
  public dateOut: string = this.currentDate();
  public dateIn: string = "2017-04-01";
  public date: string = this.currentDate();
  reserveDates: any;
  public validate: boolean;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    private vehicleService: VehicleService,
    private util: UtilProvider
  ) {
   

  }

  ionViewDidLoad() {
    this.vehicle = this.navParams.get('vehicle');
    this.getBranchs();
    this.getVehicleReserveDates();
  }
  public currentDate() {
    let day: string;
    let month: string;
    let year: string = this.limitInitDate.getFullYear();
    day = (this.limitInitDate.getDate() < 10) ? '0' + this.limitInitDate.getDate() : this.limitInitDate.getDate();
    month = (this.limitInitDate.getMonth() < 10) ? '0' + (this.limitInitDate.getMonth() + 1) : (this.limitInitDate.getMonth() + 1);
    let date: string = year + '-' + month + '-' + day;
    return date;
  }

  private getBranchs() {
    this.loading = this.util.loading();
    this.vehicleService.getBranchs().subscribe(response => {
      setTimeout(() => {
        this.branchs = response;
        this.branch_destiny = this.branchs[0].id;
        console.log(response);
        let loadin_dismiss = this.util.loadingDismiss();
      });
    },
      error => {
        this.util.showError('Oops', this.util.strings.modal_error_connection);
        let loadin_dismiss = this.util.loadingDismiss();
      });
  }
  private getVehicleReserveDates() {
    this.loading = this.util.loading();
    this.vehicleService.getVehicleReserveDates(this.vehicle.vehiculo_id).subscribe(response => {
      setTimeout(() => {
        this.reserveDates = response;
        this.verifyDates(this.dateIn);
        console.log(response);
        let loadin_dismiss = this.util.loadingDismiss();
      });
    },
      error => {
        this.util.showError('Oops', this.util.strings.modal_error_connection);
        let loadin_dismiss = this.util.loadingDismiss();
      });
  }

  public verifyDates(d: string) {
    let da: any = new Date(d);
    console.log(this.reserveDates);
    for (let i = 0; i < this.reserveDates.length; i++) {
      let daIn: any = new Date(this.reserveDates[i].fecha_inicia_proceso);
      let daOut: any = new Date(this.reserveDates[i].fecha_final_proceso);      
      if (da <= daOut && da >= daIn) {
        this.validate= true;
        this.util.showError('Lo sentimos', 'Este vehiculo ya esta reservado para esta fecha.');
        break;
      }else {
        this.validate= false;
      }
    }
  }

  btnSearch() {
    this.showSearchBar = !this.showSearchBar;
  }

  public goToProfile() {
    this.nav.push(ProfilePage)
  }


  public goConfirm() {
    let request =
      {
        fecha_inicio: this.dateIn,
        fecha_fin: this.dateOut,
        sucursal_entrega: this.branch_destiny + '',
        vehiculo_id: this.vehicle.vehiculo_id + '',
        sucursal_id: this.vehicle.sucursal_id + '',
        conductor: (this.driver ? '1' : '0')
      };
    this.nav.push(ConfirmReservePage, { request: request, vehicle: this.vehicle })
  }
}
