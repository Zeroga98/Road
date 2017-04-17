import { Component, Input } from '@angular/core';

@Component({
  selector: 'vehicle-item',
  templateUrl: 'vehicle-item.html'
})

export class VehicleItemComponent {

   @Input() alquilado:number;
   @Input() auto_nombre: string;
   @Input() descripcion: string;
   @Input() favorito:number;
   @Input() foto_url: string;
   @Input() marca_nombre:string;
   @Input() modelo:string;
   @Input() precio_dia: string;
   @Input() puertas:number;
   @Input() puestos:number;
   @Input() sucursal: string;
   @Input() sucursal_municipio:string;
   @Input() tipo_combustible: string;
   @Input() tipo_transmicion: string;
   @Input() vehiculo_id:number;

  constructor() {}

}