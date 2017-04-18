import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { VehicleService } from '../../../providers/vehicle-service';
import { ProfilePage } from '../../user/profile/profile';
import { ConfirmReservePage } from '../../vehicle/confirm_reserve/confirm-reserve';

@Component({
  selector: 'page-reserve',
  templateUrl: 'vehicle-reserve.html',
})
export class VehicleReservePage {

  loading: Loading;
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
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController

  ) {}

  ionViewDidLoad() {
    this.vehicle = this.navParams.get('vehicle');
    this.getBranchs();
    this.getVehicleReserveDates();
  }

  private getBranchs() {
    this.showLoading()
    this.vehicleService.getBranchs().subscribe(response => {
      setTimeout(() => {
        this.loading.dismiss();
        this.branchs = response;
        this.branch_destiny = this.branchs[0].id;
      });        
    },
    error => {   
        this.showError('Oops', 'No se pudo conectar con el servidor, verifica la conexión con internet.');
    });
  }
  private getVehicleReserveDates() {
    this.showLoading()
    this.vehicleService.getVehicleReserveDates(this.vehicle.vehiculo_id).subscribe(response => {
      setTimeout(() => {
        this.loading.dismiss();
        this.reserveDates = response;
      });  
    },
    error => {   
        this.showError('Oops', 'No se pudo conectar con el servidor, verifica la conexión con internet.');
    });
  }

  public verifyDates(d:string){
    let da: any = new Date(d);
    for(let i = 0; i < this.reserveDates.length; i++){
      let daIn: any = new Date(this.reserveDates[i].fecha_inicia_proceso);
      let daOut: any = new Date(this.reserveDates[i].fecha_final_proceso);
      if(da <= daOut && da >= daIn ){
        this.showError('Lo sentimos', 'Este vehiculo ya esta reservado para esta fecha.');  
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

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    this.loading.present();
  }

  private showError(title, text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });

    alert.present(prompt);
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
