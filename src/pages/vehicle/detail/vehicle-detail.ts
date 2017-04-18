import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VehicleService } from '../../../providers/vehicle-service';
import { VehicleReservePage } from '../reserve/vehicle-reserve';


@Component({
  selector: 'page-vehicleDetailPage',
  templateUrl: 'vehicle-detail.html'
})
export class VehicleDetailPage {

  search: string = "";
  showSearchBar: boolean = false;
  vehicle: any;

  constructor(
    private nav: NavController,
    public navParams: NavParams,
    private vehicleService: VehicleService
  ) { 
    this.vehicle = this.navParams.get('vehicle');

  }

  ionViewDidLoad() {
    this.detail();
    console.log(this.vehicle);
  }
  public goToReserve(vehicle: any) {
    this.nav.push(VehicleReservePage, { vehicle: vehicle })
  }
public favorite(){
  console.log("favorito!!");
}
  public detail() {
    this.vehicleService.getDetaild(this.vehicle.vehiculo_id).subscribe(
      vehicle => {
        this.vehicle.accessories = [];
        if (vehicle[0].accesorios != null) {
          let ac_icon = vehicle[0].ac_iconos.split(",");
          let accessories = vehicle[0].accesorios.split(",");
          for (let i = 0; i < accessories.length; i++) {
            this.vehicle.accessories.push({ name: accessories[i], icon: ac_icon[i] });
          }
        }
        this.vehicle.photos = [];
        if (vehicle[0].fotos != null) {
          this.vehicle.photos = vehicle[0].fotos.split(",");

        }
        this.vehicle.empresa_aseguradora = vehicle[0].empresa_aseguradora;
        this.vehicle.proveedor_apellidos = vehicle[0].proveedor_apellidos;
        this.vehicle.proveedor_celular = vehicle[0].proveedor_celular;
        this.vehicle.proveedor_nombres = vehicle[0].proveedor_nombres;
        this.vehicle.sucursal = vehicle[0].sucursal;
        this.vehicle.sucursal_departamento = vehicle[0].sucursal_departamento;
        this.vehicle.sucursal_municipio = vehicle[0].sucursal_municipio;
        this.vehicle.tipo_direccion = vehicle[0].tipo_direccion;
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
