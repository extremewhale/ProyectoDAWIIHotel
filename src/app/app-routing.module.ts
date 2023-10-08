import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaPrincipalComponent } from './reserva/reserva-principal/reserva-principal.component';
import { TipousuarioPrincipalComponent } from './tipousuario/tipousuario-principal/tipousuario-principal.component';
import { UsuarioPrincipalComponent } from './usuario/usuario-principal/usuario-principal.component';
import { PasajeroPrincipalComponent } from './pasajero/pasajero-principal/pasajero-principal.component';
import { LoginPrincipalComponent } from './login/login-principal/login-principal.component';
import { HabitacionPrincipalComponent } from './habitacion/habitacion-principal/habitacion-principal.component';

const routes: Routes = [

  {
    path:'',
    component: PasajeroPrincipalComponent,
    pathMatch:"full"
  },
  {
    path:'pasajero',
    component: PasajeroPrincipalComponent
  },
  {
    path:'habitacion',
    component: HabitacionPrincipalComponent
  },
  {
    path:'reserva',
    component: ReservaPrincipalComponent
  },
  {
    path:'tipousuario',
    component: TipousuarioPrincipalComponent
  },
  {
    path:'usuario',
    component: UsuarioPrincipalComponent
  },
  {
    path:'login',
    component: LoginPrincipalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
