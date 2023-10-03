import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pasajero/pagina-principal/pagina-principal.component';
import { ReservaPrincipalComponent } from './reserva/reserva-principal/reserva-principal.component';
import { TipousuarioPrincipalComponent } from './tipousuario/tipousuario-principal/tipousuario-principal.component';
import { UsuarioPrincipalComponent } from './usuario/usuario-principal/usuario-principal.component';

const routes: Routes = [

  {
    path:'',
    component: PaginaPrincipalComponent,
    pathMatch:"full"
  },
  {
    path:'pasajero',
    component: PaginaPrincipalComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
