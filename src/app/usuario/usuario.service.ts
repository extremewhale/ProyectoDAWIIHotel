import { Injectable } from '@angular/core';
import { Usuario } from './interface/Usuario';
import { HttpClient } from '@angular/common/http';
import urlBase from '../contantes';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private _usuarios:Usuario[]=[]

 get usuarios():Usuario[]{
  return [...this._usuarios]
 }

 listarUsuarios(){
  this._http.get<Usuario[]>(urlBase+"/user").subscribe(res=>{
     this._usuarios=res
  })
 }

 obtenerUsuario(id:number): Observable<Usuario>{
  return this._http.get<Usuario>(urlBase+"/user/"+id);
 }

  constructor(private _http:HttpClient) {
    this.listarUsuarios()
   }
}
