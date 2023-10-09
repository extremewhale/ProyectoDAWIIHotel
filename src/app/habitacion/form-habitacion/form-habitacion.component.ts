import { Component } from '@angular/core';
import { HabitacionService } from '../habitacion.service';
import { Piso } from '../interfaces/Piso';
import { EstadoHabitacion } from '../interfaces/EstadoHabitacion';
import { TipoHabitacion } from '../interfaces/TipoHabitacion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.css']
})
export class FormHabitacionComponent {

  titulo:string=""
  
  
  constructor(private habitacionService:HabitacionService,private routes:Router,
    private activateRoute:ActivatedRoute){
     var id= activateRoute.snapshot.params["id"]
      if(id==undefined) this.titulo="Agregar Habitación"
      else this.titulo="Editar Habitación"
    }

  get pisos():Piso[]{
    return this.habitacionService.pisos;
  }

  get estadohabitaciones():EstadoHabitacion[]{
    return this.habitacionService.estadohabitaciones;
  }

  get tipohabitaciones():TipoHabitacion[]{
    return this.habitacionService.tipohabitaciones
  }

  regresar(){
    this.routes.navigate(["habitacion"])
  }
}
