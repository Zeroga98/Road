import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from './api-service';

@Injectable()
export class ProviderService {

  constructor(public apiService: ApiService) {
  }

  public getPayment(state: string) {
  	 return this.apiService.get('/paysheet/payment?type=' + state)
    .map(
      data => {
        return data;
    })
  }

}