import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { UtilProvider } from '../../../providers/util-provider';
import { SignUpPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private loading: any;
  Credentials = {email: '', password: ''};

  constructor(
      private nav: NavController, 
      private authService: AuthService, 
      private util: UtilProvider
  ) {
  }
 
  public goToSignUp() {
    this.nav.push(SignUpPage)
  }
 
  public login() {
    this.loading = this.util.loading();
    this.authService.login(this.Credentials).subscribe(response => {
      if(response.token){
        setTimeout(() => {
          this.nav.setRoot(ProfilePage)
        });  
      } else{
        this.util.presentToast(response);
      }
      this.loading.dismiss();
    },
    error => {
      this.util.presentToast(this.util.strings.error_connection);
      this.loading.dismiss();
    });
  }
}