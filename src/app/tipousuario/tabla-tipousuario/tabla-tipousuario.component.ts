import { Component } from '@angular/core';
import TipoUsuario from '../interface/TipoUsuario';
import { TipousuarioService } from '../tipousuario.service';

@Component({
  selector: 'app-tabla-tipousuario',
  templateUrl: './tabla-tipousuario.component.html',
  styleUrls: ['./tabla-tipousuario.component.css']
})
export class TablaTipousuarioComponent {


   get tipousuarios():TipoUsuario[]{
    return this.tipousuarioService.tipousuarios;
   }

   constructor(private tipousuarioService:TipousuarioService){

   }

}
