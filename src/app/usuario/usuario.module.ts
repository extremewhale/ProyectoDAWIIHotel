import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPrincipalComponent } from './usuario-principal/usuario-principal.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [
    UsuarioPrincipalComponent,
    TablaUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[UsuarioService]
})
export class UsuarioModule { }
