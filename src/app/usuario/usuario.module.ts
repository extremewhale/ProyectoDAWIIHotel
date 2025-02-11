import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPrincipalComponent } from './usuario-principal/usuario-principal.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { UsuarioService } from './usuario.service';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import {FormsModule} from "@angular/forms"


@NgModule({
  declarations: [
    UsuarioPrincipalComponent,
    TablaUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers:[UsuarioService]
})
export class UsuarioModule { }
