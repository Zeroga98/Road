import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { VehicleListPage } from '../pages/vehicle/list/vehicle-list';
import { MenuService } from '../providers/menu-service';
import { AuthService } from '../providers/auth-service';
import { LoginPage } from '../pages/user/login/login';

@Component({
  templateUrl: 'app.html'
})

export class Road {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = VehicleListPage;
  pages: Array <any>;

  constructor(
    public authService: AuthService,
    public platform: Platform,
    public menuService: MenuService,
    public appCtrl: App
  ){
      this.initializeApp();
  }

  initializeApp() {
    this.authService.populate();
    this.pages = this.menuService.getMenu();
    this.platform.ready().then(() => {
      StatusBar.overlaysWebView(true);
      StatusBar.styleLightContent();
      StatusBar.backgroundColorByHexString('#D32E2E');
      Splashscreen.hide();
    });
  }

  openPage(page) {
      this.appCtrl.getRootNav().setRoot(page.component).catch(err => {
        console.log(err);
        this.appCtrl.getRootNav().setRoot(LoginPage);
      });
  } 
}

