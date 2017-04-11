import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api-service';

import { Vehicle } from '../models/vehicle.model'

@Injectable()
export class VehicleService {

  constructor( public apiService: ApiService ) {
    this.apiService;
  }

  public getAll(): Observable<Vehicle[]> {
    return this.apiService.get('/vehicle/all')
    .map(
      data => {
        return data;
    })
  }

}