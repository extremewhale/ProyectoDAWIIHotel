import { Injectable } from '@angular/core';
import TipoUsuario from './interface/TipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  private _tipousuarios: TipoUsuario[] = [
    {
      idtipousuario:1,
      nombretipousuario:"Administrador",
      descripciontipousuario:"Administra la aplicación"
    },
    {
      idtipousuario:2,
      nombretipousuario:"Gerente",
      descripciontipousuario:"Consulta las transacciones"
    }
   ]

   get tipousuarios():TipoUsuario[]{
     return [...this._tipousuarios];
   }

  constructor() { 

  }
}
