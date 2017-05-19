import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'res-detail',
  templateUrl: 'res-detail.html'
})
export class ResDetailComponent {

   @Input() user_rol: string;

  constructor(
      private nav: NavController
  ) {
    console.log(this.user_rol);    
  }

}
