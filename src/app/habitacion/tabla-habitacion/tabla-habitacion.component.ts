import { Component } from '@angular/core';
import { HabitacionService } from '../habitacion.service';
import { Habitacion } from '../interfaces/Habitacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-habitacion',
  templateUrl: './tabla-habitacion.component.html',
  styleUrls: ['./tabla-habitacion.component.css']
})
export class TablaHabitacionComponent {

  get habitaciones():Habitacion[]{
    return this.habitacionServices.habitaciones;
  }

  constructor(private habitacionServices:HabitacionService,private routes:Router){

  }

  editar(id:number){
    this.routes.navigate(["habitacion/editar/"+id])
  }

}
