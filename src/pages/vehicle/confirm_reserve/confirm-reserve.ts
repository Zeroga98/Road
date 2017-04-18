import {Component} from '@angular/core';
import {NavController,NavParams,AlertController, LoadingController, Loading} from 'ionic-angular';
import { VehicleService } from '../../../providers/vehicle-service';
import { VehicleListPage } from '../list/vehicle-list';

@Component({
  selector: 'page-confirm-reserve',
  templateUrl: 'confirm-reserve.html'
})
export class ConfirmReservePage {

  private loading: Loading;
  public request: any = [];
  public vehicle: any = [];

  constructor(
    private nav: NavController, 
     public navParams: NavParams,
     public vehicleService :VehicleService,
     private alertCtrl: AlertController, 
      private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    this.request = this.navParams.get('request');
    this.vehicle = this.navParams.get('vehicle');
  }

  public confirm(){
    this.showLoading();
    this.vehicleService.reserveVehicle(this.request).subscribe(response => { 
      this.nav.setRoot(VehicleListPage);
      this.showError('Solicitado', 'Te esperamos en nuestra sucursal.');
    },
    error => {
      this.showError('Oops', 'No se pudo conectar con el servidor, verifica la conexión con internet.');
    });
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

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    this.loading.present();
  }
  
}