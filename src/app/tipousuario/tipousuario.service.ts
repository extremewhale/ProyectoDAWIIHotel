import { Injectable } from '@angular/core';
import TipoUsuario from './interface/TipoUsuario';
import { Menu } from './interface/Menu';

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

   private _menus: Menu[]= [
    {
      idmenu:1,
      nombremenu:"Pasajero",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:2,
      nombremenu:"Usuario",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:3,
      nombremenu:"Tipo Usuario",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:4,
      nombremenu:"Reserva",
      iconomenu:"",
      urlmenu:""
    }

   ]


   get tipousuarios():TipoUsuario[]{
     return [...this._tipousuarios];
   }

   get menus():Menu[]{
    return [...this._menus]
   }

  constructor() { 

  }
}
