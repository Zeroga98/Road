import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-reserve-detail',
  templateUrl: 'reserve-detail.html',
})
export class ReserveDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserveDetail');
  }

}
