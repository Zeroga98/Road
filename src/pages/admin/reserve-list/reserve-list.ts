import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-reserve-list',
  templateUrl: 'reserve-list.html',
})
export class ReserveListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserveList');
  }

}
