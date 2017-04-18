import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import { VehicleService } from '../../../providers/vehicle-service';

@Component({
  selector: 'page-confirm-reserve',
  templateUrl: 'confirm-reserve.html'
})
export class ConfirmReservePage {

  public request: any = [];

  constructor(
    private nav: NavController, 
     public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.request = this.navParams.get('request');
    console.log(this.request);
  }
}