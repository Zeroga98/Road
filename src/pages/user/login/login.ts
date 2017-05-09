import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { UserService } from '../../../services/user-service';
import { MenuService } from '../../../services/menu-service';

import { UtilProvider } from '../../../providers/util-provider';
import { SignUpPage } from '../signup/signup';
import { VehicleListPage } from '../../vehicle/list/vehicle-list'; 

import { User } from '../../../models/user.model';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private loading: any;
  private currentUser: User;
  Credentials = {email: '', password: ''};

  constructor(
      private nav: NavController, 
      private authService: AuthService, 
      private userService: UserService,
      public menuService: MenuService,
      private util: UtilProvider
  ) {

    this.authService.currentUser.subscribe((userData) => { 
      this.currentUser = userData;
    });
  }
 
  public goToSignUp() {
    this.nav.push(SignUpPage)
  }
 
  public login() {
    this.loading = this.util.loading();
    this.authService.login(this.Credentials).subscribe(response => {
      if(response.token){
        this.getUserProfile();
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

  private getUserProfile(){
    this.userService.getUser().subscribe(
        data => {
          console.log(data);
          if(data != undefined && data[0].status != 'ERROR'){
            this.menuService.configMenu(data[0].rol_nombre);
            this.currentUser.foto = data[0].foto;
            this.currentUser.genero = data[0].genero;
            this.currentUser.lastname = data[0].lastname;
            this.currentUser.celular = data[0].celular;
            this.currentUser.rol_nombre = data[0].rol_nombre;
            this.currentUser.tipo = data[0].tipo;
            this.authService.setCurrentUser(this.currentUser);
            
          } else if(data[0].type == 'token_null'){
            console.log("No esta logeado");
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}