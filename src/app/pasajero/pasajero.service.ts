import { Injectable } from '@angular/core';
import { Pasajero } from './interfaces/Pasajero';
import {  TipoDocumento } from './interfaces/TipoDocumento';
import urlBase from "../contantes"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PasajeroService {


  constructor( private _http:HttpClient){
    this.listarTipoDocumento();
    this.listarPasajeros();
  }

  private _tipodocumentos:TipoDocumento[]=[]
  private _pasajeros:Pasajero[]=[]
  private _pasajero?:Pasajero;

  get pasajeros():Pasajero[]{
    return [...this._pasajeros]
  }

  listarPasajeros(){
    this._http.get<Pasajero[]>(urlBase+"/passenger").subscribe((res) =>{
      console.log(res)
      this._pasajeros=res;
    })
  }

  obtenerPasajero(id:number) : Observable<Pasajero>{
   return this._http.get<Pasajero>(urlBase+"/passenger/"+id);
    
  }

  listarTipoDocumento(){
    this._http.get<TipoDocumento[]>(urlBase+"/doctype").subscribe((res) =>{
      console.log(res)
      this._tipodocumentos=res;
    })
     
   }

  get tipodocumentos():TipoDocumento[]{
    return [...this._tipodocumentos]
  }


}
