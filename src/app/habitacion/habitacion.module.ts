import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionPrincipalComponent } from './habitacion-principal/habitacion-principal.component';
import { TablaHabitacionComponent } from './tabla-habitacion/tabla-habitacion.component';



@NgModule({
  declarations: [
    HabitacionPrincipalComponent,
    TablaHabitacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabitacionModule { }
