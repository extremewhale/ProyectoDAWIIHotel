import { Injectable } from '@angular/core';
import TipoUsuario from './interface/TipoUsuario';
import { Menu } from './interface/Menu';
import { HttpClient } from '@angular/common/http';
import urlBase from '../contantes';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  private _tipousuarios: TipoUsuario[] = []

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
      nombremenu:"Habitación",
      iconomenu:"",
      urlmenu:""
    },
    {
      idmenu:5,
      nombremenu:"Reserva",
      iconomenu:"",
      urlmenu:""
    }

   ]

   obtenerTipoUsuario(){
    this._http.get<TipoUsuario[]>(urlBase+"/usertypes").subscribe((res)=>{
       this._tipousuarios=res;
    })
   }


   get tipousuarios():TipoUsuario[]{
     return [...this._tipousuarios];
   }

   get menus():Menu[]{
    return [...this._menus]
   }

  constructor(private _http:HttpClient) { 
    this.obtenerTipoUsuario();
  }
}
