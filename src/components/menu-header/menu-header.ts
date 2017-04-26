import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { LoginPage } from '../../pages/user/login/login';
import { SignUpPage } from '../../pages/user/signup/signup';
import { AuthService } from '../../services/auth-service';

import { User } from '../../models/user.model';

@Component({
  selector: 'menu-header',
  templateUrl: 'menu-header.html'
})
export class MenuHeaderComponent {

  currentUser: User;
  isAuthenticated: boolean;

  constructor(
    public appCtrl: App,
    public authService : AuthService
  ){
    /** Suscripción al observable que retornará el estado de sesión */
    this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    })

    /** Suscripción al observable que retornará los datos del usuario actual */
    this.authService.currentUser.subscribe((userData) => { 
      this.currentUser = userData
    })
  }   

/** Acciones de los botones en el header del menú  */

  Login(){
     this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  SignUp(){
     this.appCtrl.getRootNav().setRoot(SignUpPage);
  }

  Logout(){
    this.authService.logout();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}