import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasajeroPrincipalComponent } from './pasajero-principal/pasajero-principal.component';
import { TablaPasajeroComponent } from './tabla-pasajero/tabla-pasajero.component';
import { PasajeroService } from './pasajero.service';
import { FormPasajeroComponent } from './form-pasajero/form-pasajero.component';



@NgModule({
  declarations: [
    PasajeroPrincipalComponent,
    TablaPasajeroComponent,
    FormPasajeroComponent
    
  ],
  imports: [
    CommonModule
  ],
  providers:[
    PasajeroService
  ]
})
export class PasajeroModule { }
