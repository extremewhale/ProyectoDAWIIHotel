import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero-principal',
  templateUrl: './pasajero-principal.component.html',
  styleUrls: ['./pasajero-principal.component.css']
})
export class PasajeroPrincipalComponent {
  
  constructor(private router:Router){

  }
  agregar(){
    this.router.navigate(["pasajero/agregar"])
  }
}
