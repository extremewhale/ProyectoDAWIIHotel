import { Component } from '@angular/core';
import { PasajeroService } from '../pasajero.service';

@Component({
  selector: 'app-tabla-pasajero',
  templateUrl: './tabla-pasajero.component.html',
  styleUrls: ['./tabla-pasajero.component.css']
})
export class TablaPasajeroComponent {

  get pasajeros(){
    return [...this.pasajeroService.pasajeros]
  }
  constructor(private pasajeroService:PasajeroService){
    
  }

}
