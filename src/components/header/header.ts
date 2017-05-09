import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import {NavController} from 'ionic-angular';
import { ProfilePage } from '../../pages/user/profile/profile';


@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;
  search: string ="";
  showSearchBar: boolean = false; 

  constructor(
    private nav: NavController,
  ) { 
    console.log('Hello Header Component');
    this.text = 'Hello World';
  }
  public goToProfile() {
    this.nav.push(ProfilePage)
  }
  btnSearch(){
    this.showSearchBar = !this.showSearchBar;
  }

}
