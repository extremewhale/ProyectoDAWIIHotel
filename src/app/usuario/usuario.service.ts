import { Injectable } from '@angular/core';
import { Usuario } from './interface/Usuario';
import { HttpClient } from '@angular/common/http';
import urlBase from '../contantes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private _usuarios:Usuario[]=[]

 get usuarios():Usuario[]{
  return [...this._usuarios]
 }

 obtenerUsuarios(){
  this._http.get<Usuario[]>(urlBase+"/user").subscribe(res=>{
     this._usuarios=res
  })
 }

  constructor(private _http:HttpClient) {
    this.obtenerUsuarios()
   }
}
