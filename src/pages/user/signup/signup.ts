import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
  User = {name: '', email: '', password: ''};

constructor(
  private nav: NavController, 
  private authService: AuthService, 
  ) {}

  public signUp(){ }

}
