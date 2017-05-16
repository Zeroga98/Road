import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContractDetailPage } from '../contract-detail/contract-detail';


@Component({
  selector: 'page-cutoff-date',
  templateUrl: 'cutoff-date.html'
})
export class CutoffDatePage {

  

  constructor(
      private nav: NavController,
      public navParams: NavParams
  ) {}

  public goToDetail() {
    this.nav.push(ContractDetailPage)
  }
 
}