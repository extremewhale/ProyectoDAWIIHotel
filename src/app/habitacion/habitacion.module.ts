import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionPrincipalComponent } from './habitacion-principal/habitacion-principal.component';
import { TablaHabitacionComponent } from './tabla-habitacion/tabla-habitacion.component';
import { HabitacionService } from './habitacion.service';



@NgModule({
  declarations: [
    HabitacionPrincipalComponent,
    TablaHabitacionComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HabitacionService
  ]
})
export class HabitacionModule { }
