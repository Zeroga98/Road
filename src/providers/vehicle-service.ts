import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api-service';

import { Vehicle } from '../models/vehicle.model'

@Injectable()
export class VehicleService {

  constructor( public apiService: ApiService ) {
    this.apiService;
  }

  public getAll(empresa_id: number, limit: number, offset: number): Observable<Vehicle[]> {
    return this.apiService.get('/vehicle/all?empresa_id=' + empresa_id + '&limit=' + limit + '&offset=' + offset )
    .map(
      data => {
        return data;
    })
  }
   public getDetaild(vehicle_id: number): Observable<any> {
    return this.apiService.get('/vehicle/get?id=' + vehicle_id)
    .map(
      data => {
        return data;
    })
  }

}