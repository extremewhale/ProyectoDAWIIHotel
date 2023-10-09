import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitacion-principal',
  templateUrl: './habitacion-principal.component.html',
  styleUrls: ['./habitacion-principal.component.css']
})
export class HabitacionPrincipalComponent {


  constructor(private routes:Router){

  }

  agregar(){
    console.log("sss")
    this.routes.navigate(["habitacion/agregar"])
  }

}
