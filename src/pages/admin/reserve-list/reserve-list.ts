import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ReserveDetailPage } from '../../user/reserve-detail/reserve-detail';

import { UserService } from '../../../services/user-service';
import { UtilProvider } from '../../../providers/util-provider';

@Component({
  selector: 'page-reserve-list',
  templateUrl: 'reserve-list.html',
})
export class ReserveListPage {

  @ViewChild(Slides) slides: Slides;
  public index: number = 0;
  public reserves: any = undefined;
  public historys: any = undefined;
  public full1: boolean = false;
  public limit1: number = 5;
  public offset1: number = 0;
  public full2: boolean = false;
  public limit2: number = 5;
  public offset2: number = 0;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    private util: UtilProvider,
    private userService: UserService
  ) {  }

  ionViewDidLoad() {
    this.getAllReserves();
    this.getAllReservesHistory();
  }

  public getAllReserves(){
    this.util.loading();
    this.userService.getAllReserve({ states: '123', limit: this.limit1.toString(), offset: this.offset1.toString() })
    .subscribe(data => {
        if(this.offset1 == 0){
          this.reserves = [];
        }
        if (data != undefined && data.length > 0) {
          for (var i = 0; i < data.length; ++i) {
            this.reserves.push(data[i]);
          }
        }

        if(data != undefined && data.length < this.limit1){
          this.full1 = true;
        }
        this.offset1 += this.limit1;
        console.log(this.reserves);
        this.util.loadingDismiss();
      },
      error => {
        this.reserves = [];
        this.util.loadingDismiss();
        console.log(error);
      });
  }

  public getAllReservesHistory(){
    this.util.loading();
    this.userService.getAllReserve({ states: '45', limit: this.limit2.toString(), offset: this.offset2.toString() })
    .subscribe(data => {
        if(this.offset2 == 0){
          this.historys = [];
        }
        if (data != undefined && data.length > 0) {
          for (var i = 0; i < data.length; ++i) {
            this.historys.push(data[i]);
          }
        } 

        if(data != undefined && data.length < this.limit2){
          this.full2 = true;
        }
        this.offset2 += this.limit2;
        console.log(this.historys);
        this.util.loadingDismiss();
      },
      error => {
        this.historys = [];
        this.util.loadingDismiss();
        console.log(error);
      });
  }

  public rejectReserve(reserve: any, index: number){
    this.util.loading();
    this.userService.rejectReserve({ id: reserve.alquiler_id, description: "Rechazado porque si" }).subscribe(
      data => {
        if(data != undefined && data[0].status){
          reserve.estado = "Rechazado";
          this.reserves.splice(index, 1);
          this.historys.push(reserve);
        } else {
          this.util.presentToast("Ocurrio un problema al rechazar la reserva");
        }
        this.util.loadingDismiss();
      },
      error => {
        this.util.loadingDismiss();
        console.log(error);
      }
    );
  }

  public goToDetail(reserve: string) {
    this.nav.push(ReserveDetailPage, { reserve: reserve })
  }

  public slideChanged(){
    this.index = this.slides.getActiveIndex();
    console.log(this.index);
    //this.index = i;
  }

}
