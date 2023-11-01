import { Injectable } from '@angular/core';
import { Pasajero } from './interfaces/Pasajero';
import { DocType } from './interfaces/TipoDocumento';
import urlBase from "../contantes"
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PasajeroService {


  constructor( private _http:HttpClient){
    this.obtenerDatos();
  }

  private _tipodocumentos:DocType[]=[]
  private _pasajeros:Pasajero[]=[]

  get pasajeros():Pasajero[]{
    return [...this._pasajeros]
  }

  obtenerDatos(){
    this._http.get<Pasajero[]>(urlBase+"/passenger").subscribe((res) =>{
      console.log(res)
      this._pasajeros=res;
    })
  }

  get tipodocumentos():DocType[]{
    return [...this._tipodocumentos]
  }


}
