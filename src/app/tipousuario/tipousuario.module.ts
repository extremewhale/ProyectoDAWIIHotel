import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipousuarioPrincipalComponent } from './tipousuario-principal/tipousuario-principal.component';
import { TablaTipousuarioComponent } from './tabla-tipousuario/tabla-tipousuario.component';
import { TipousuarioService } from './tipousuario.service';
import { FormTipousuarioComponent } from './form-tipousuario/form-tipousuario.component';
import {FormsModule} from "@angular/forms"


@NgModule({
  declarations: [
    TipousuarioPrincipalComponent,
    TablaTipousuarioComponent,
    FormTipousuarioComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers:[
    TipousuarioService
  ]
})
export class TipousuarioModule { }
