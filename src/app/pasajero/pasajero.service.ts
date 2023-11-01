import { Injectable } from '@angular/core';
import { Pasajero } from './interfaces/Pasajero';
import { TipoDocumento } from './interfaces/TipoDocumento';
import urlBase from "../contantes"
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PasajeroService {


  constructor( private _http:HttpClient){
    this.obtenerDatos();
  }

  private _tipodocumentos:TipoDocumento[]=[
    {
      idtipodoc:1,
      nobretipodoc:"DNI"
    },
    {
      idtipodoc:2,
      nobretipodoc:"Carnet Extranjeria"
    },
    {
      idtipodoc:3,
      nobretipodoc:"Pasaporte"
    }
  ]
  private _pasajeros:Pasajero[]=[]

  get pasajeros():Pasajero[]{
    return [...this._pasajeros]
  }

  obtenerDatos(){
    this._http.get(urlBase+"/passenger").subscribe((res:any) =>{
      console.log(res)
      this._pasajeros=res;
    })
  }

  get tipodocumentos():TipoDocumento[]{
    return [...this._tipodocumentos]
  }


}
