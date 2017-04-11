import { Component, Input } from '@angular/core';

@Component({
  selector: 'vehicle-item',
  templateUrl: 'vehicle-item.html'
})

export class VehicleItemComponent {

    @Input() nombre: string;
    @Input() precio: string;
    @Input() img: string;
    @Input() sucursal: string;
    @Input() combustible: string;
    @Input() modelo: string;

  constructor() {}

}