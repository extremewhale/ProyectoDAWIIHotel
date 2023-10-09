import { Component } from '@angular/core';
import TipoUsuario from '../interface/TipoUsuario';
import { TipousuarioService } from '../tipousuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-tipousuario',
  templateUrl: './tabla-tipousuario.component.html',
  styleUrls: ['./tabla-tipousuario.component.css']
})
export class TablaTipousuarioComponent {


   get tipousuarios():TipoUsuario[]{
    return this.tipousuarioService.tipousuarios;
   }

   constructor(private tipousuarioService:TipousuarioService,private router:Router){

   }

   editar(id:number){
    this.router.navigate(["tipousuario/editar/"+id]);
   }

}
