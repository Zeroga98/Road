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
  public dateOut: string = '2017-04-01';
  public dateIn: string = '2017-04-01';
  public limitInitDate: any = new Date();
  reserveDates: any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    private vehicleService: VehicleService,  
    private util: UtilProvider
  ) {}

  ionViewDidLoad() {
    this.vehicle = this.navParams.get('vehicle');
    this.getBranchs();
    this.getVehicleReserveDates();
  }

  private getBranchs() {
    this.loading = this.util.loading();
    this.vehicleService.getBranchs().subscribe(response => {
      setTimeout(() => {
        this.branchs = response;
        this.branch_destiny = this.branchs[0].id;
        this.loading.dismiss();
      });        
    },
    error => {   
        this.util.showError('Oops', this.util.strings.modal_error_connection);
        this.loading.dismiss();
    });
  }
  private getVehicleReserveDates() {
    this.loading = this.util.loading();
    this.vehicleService.getVehicleReserveDates(this.vehicle.vehiculo_id).subscribe(response => {
      setTimeout(() => {
        this.reserveDates = response;
        this.loading.dismiss();
      });  
    },
    error => {   
        this.util.showError('Oops', this.util.strings.modal_error_connection);
        this.loading.dismiss();
    });
  }

  public verifyDates(d:string){
    let da: any = new Date(d);
    for(let i = 0; i < this.reserveDates.length; i++){
      let daIn: any = new Date(this.reserveDates[i].fecha_inicia_proceso);
      let daOut: any = new Date(this.reserveDates[i].fecha_final_proceso);
      if(da <= daOut && da >= daIn ){
        this.util.showError('Lo sentimos', 'Este vehiculo ya esta reservado para esta fecha.');  
        break;
      }
    }
  }

  btnSearch(){
    this.showSearchBar = !this.showSearchBar;
  }

  public goToProfile() {
    this.nav.push(ProfilePage)
  }


  public goConfirm(){
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
