import { Component } from '@angular/core';
import { HabitacionService } from '../habitacion.service';
import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-tabla-habitacion',
  templateUrl: './tabla-habitacion.component.html',
  styleUrls: ['./tabla-habitacion.component.css']
})
export class TablaHabitacionComponent {

  get habitaciones():Habitacion[]{
    return this.habitacionServices.habitaciones;
  }

  constructor(private habitacionServices:HabitacionService){

  }

}
