import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../../services/auth-service';
import { UserService } from '../../../services/user-service';
import { ReserveDetailPage } from '../../user/reserve-detail/reserve-detail';
import { UtilProvider } from '../../../providers/util-provider';

@Component({
  selector: 'page-myreservations',
  templateUrl: 'my_reservations.html'
})

export class MyReservationsPage {

  public reserves: any = undefined;
  public historys: any = undefined;

  constructor(
    private nav: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private userService: UserService,
    private util: UtilProvider
  ) { }


  ionViewDidLoad() {
    this.getClientReserve('false');
    this.getClientReserve('true');
  }

  public getClientReserve(history: string) {
    this.util.loading();
    this.userService.getReserveClient(history).subscribe(
      data => {
        if (history == 'true') {
          this.historys = [];
        } else {
          this.reserves = [];
        }
        if (data != undefined && data.length > 0) {
          if (history == 'true') {
            this.historys = data;
          } else {
            this.reserves = data;
          }
          console.log(this.reserves);
        }
        this.util.loadingDismiss();
      },
      error => {
        this.reserves = [];
        this.util.loadingDismiss();
        console.log(error);
      }
    );
  }

  public goToDetail(reserve: string) {
    this.nav.push(ReserveDetailPage, { reserve: reserve })
  }
}