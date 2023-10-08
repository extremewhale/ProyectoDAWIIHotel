import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasajeroPrincipalComponent } from './pasajero-principal/pasajero-principal.component';
import { TablaPasajeroComponent } from './tabla-pasajero/tabla-pasajero.component';
import { PasajeroService } from './pasajero.service';



@NgModule({
  declarations: [
    PasajeroPrincipalComponent,
    TablaPasajeroComponent
    
  ],
  imports: [
    CommonModule
  ],
  providers:[
    PasajeroService
  ]
})
export class PasajeroModule { }
