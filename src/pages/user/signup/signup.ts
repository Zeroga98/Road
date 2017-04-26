import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { ProfilePage } from '../profile/profile';
import { VehicleListPage } from '../../vehicle/list/vehicle-list';
import { UtilProvider } from '../../../providers/util-provider';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

  private loading: any;
  User = { empresa_id: 1, nombres: '', apellidos: '', email: '', password: ''};

constructor(
  private nav: NavController, 
  private authService: AuthService,
  private util: UtilProvider
  ) {}

  public signUp(){     
    this.loading = this.util.loading();
    this.authService.signUp(this.User).subscribe(response => { 
      if(response.token){
        setTimeout(() => {
          this.nav.setRoot(VehicleListPage)
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
