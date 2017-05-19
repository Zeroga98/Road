import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from './api-service';

@Injectable()
export class UserService {

  constructor(public apiService: ApiService) {
  }

  public getUser() {
  	 return this.apiService.get('/user/get-rol' )
    .map(
      data => {
        return data;
    })
  }

  public getReserveClient(){
  	return this.apiService.get('/reserve/get-reserve-client' )
    .map(
      data => {
        return data;
    })
  }

}
