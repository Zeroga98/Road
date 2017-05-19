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
   public getDetaild(vehicle_id: number, email: string): Observable<any> {
    return this.apiService.get('/vehicle/get?id=' + vehicle_id + '&email='+email)
    .map(
      data => {
        return data;
    })
  }
//Lista las sucursales disponibles
   public getBranchs(): Observable<any> {
    return this.apiService.get('/branch/all?empresa_id=1')
    .map(
      data => {
        return data;
    })
  }
//Lista las sucursales disponibles
   public getVehicleReserveDates(vehicle_id: number): Observable<any> {
    return this.apiService.get('/vehicle/reserve?vehicle_id=' + vehicle_id)
    .map(
      data => {
        return data;
    })
  }

  //Añadir vehiculo a favoritos
   public addVehicleFavorites(vehicle_id: number): Observable<any> {
    return this.apiService.post('/favorite/user-add', vehicle_id )
    .map(
      data => {
        return data;
    })
  }

  public getVehiclesProvider(): Observable<any> {
    return this.apiService.get('/provider/get-vehicles/')
    .map(
      data => {
        return data;
    })
  }

  public reserveVehicle(reserve: any): Observable<any> {
    return this.apiService.post('/reserve/pre', reserve)
    .map(
      data => {
        return data;
    })
  }
}