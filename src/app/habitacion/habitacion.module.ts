import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionPrincipalComponent } from './habitacion-principal/habitacion-principal.component';
import { TablaHabitacionComponent } from './tabla-habitacion/tabla-habitacion.component';
import { HabitacionService } from './habitacion.service';
import { FormHabitacionComponent } from './form-habitacion/form-habitacion.component';



@NgModule({
  declarations: [
    HabitacionPrincipalComponent,
    TablaHabitacionComponent,
    FormHabitacionComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HabitacionService
  ]
})
export class HabitacionModule { }
