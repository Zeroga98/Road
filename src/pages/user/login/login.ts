import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';
import { SignUpPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  Credentials = {email: '', password: ''};

  constructor(
      private nav: NavController, 
      private authService: AuthService, 
      private alertCtrl: AlertController, 
      private loadingCtrl: LoadingController
  ) {}
 
  public goToSignUp() {
    this.nav.push(SignUpPage)
  }
 
  public login() {
    this.showLoading()
    this.authService.login(this.Credentials).subscribe(response => {
      if(response.token){
        setTimeout(() => {
        this.loading.dismiss();
        this.nav.setRoot(ProfilePage)
        });  
      } else{
          this.showError(response);
      }    
    },
    error => {
      this.showError(error);
    });
  }
 
  /** Esto debe trasladarse a una directiva */

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Porfavor espere...'
    });
    this.loading.present();
  }

 /** Esto debe trasladarse a un servicio */

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present(prompt);
  }
}