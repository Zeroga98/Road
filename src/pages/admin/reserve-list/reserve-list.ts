import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReserveDetailPage } from '../../user/reserve-detail/reserve-detail';


@Component({
  selector: 'page-reserve-list',
  templateUrl: 'reserve-list.html',
})
export class ReserveListPage {

  constructor(
    public nav: NavController,
    public navParams: NavParams
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserveList');
  }
  public goToDetailReserve() {
    this.nav.push(ReserveDetailPage)
  }

}
