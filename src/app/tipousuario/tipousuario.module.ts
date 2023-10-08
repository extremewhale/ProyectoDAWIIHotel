import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipousuarioPrincipalComponent } from './tipousuario-principal/tipousuario-principal.component';
import { TablaTipousuarioComponent } from './tabla-tipousuario/tabla-tipousuario.component';
import { TipousuarioService } from './tipousuario.service';



@NgModule({
  declarations: [
    TipousuarioPrincipalComponent,
    TablaTipousuarioComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    TipousuarioService
  ]
})
export class TipousuarioModule { }
