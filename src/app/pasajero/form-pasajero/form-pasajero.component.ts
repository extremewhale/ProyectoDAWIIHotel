import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from '../pasajero.service';

@Component({
  selector: 'app-form-pasajero',
  templateUrl: './form-pasajero.component.html',
  styleUrls: ['./form-pasajero.component.css']
})
export class FormPasajeroComponent {
  titulo:string=""
  
  constructor(private router:Router,private pasajeroService:PasajeroService,private routes:ActivatedRoute){
     if(routes.snapshot.params["id"]==undefined) this.titulo="Agregar Pasajero"
     else this.titulo="Editar Pasajero"
  }

  get tipodocumentos(){
    return this.pasajeroService.tipodocumentos
  }
  
  regresar(){
    this.router.navigate(["pasajero"])
  }




}
