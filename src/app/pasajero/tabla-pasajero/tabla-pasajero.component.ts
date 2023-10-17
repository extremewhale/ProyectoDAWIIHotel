import { Component } from '@angular/core';
import { PasajeroService } from '../pasajero.service';
import { Router } from '@angular/router';
import {CargarScriptsService} from './../../cargar-scripts.service';

@Component({
  selector: 'app-tabla-pasajero',
  templateUrl: './tabla-pasajero.component.html',
  styleUrls: ['./tabla-pasajero.component.css']
})
export class TablaPasajeroComponent {

  get pasajeros(){
    return [...this.pasajeroService.pasajeros]
  }
  constructor(private pasajeroService:PasajeroService,private routes:Router,private _CargarScripts:CargarScriptsService){
    _CargarScripts.Carga(["datatable"]);
  }
  editar(idpasajero:number){
    this.routes.navigate(["pasajero/editar/"+idpasajero])
  }
}
