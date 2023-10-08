import { Injectable } from '@angular/core';
import { Usuario } from './interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 private _usuarios:Usuario[]=[
  {
    idusuario:1,
    nombreusuario:"eroldan",
    nombrepersona:"Elifio Roldan Huayllasco",
    tipousuario:"Administrador"
  },
  {
    idusuario:2,
    nombreusuario:"ftorres",
    nombrepersona:"Felix Torres Terreros",
    tipousuario:"Gerente"
  },
  {
    idusuario:3,
    nombreusuario:"hpastor",
    nombrepersona:"Hugo Pastor Vasquez",
    tipousuario:"Administrador"
  },
  {
    idusuario:4,
    nombreusuario:"lcalderon",
    nombrepersona:"Luis Calderon Tocto",
    tipousuario:"Supervisor"
  },
  {
    idusuario:5,
    nombreusuario:"carismendiz",
    nombrepersona:"Cristhofer Arismendiz Umbo",
    tipousuario:"Supervisor"
  }
 ]

 get usuarios():Usuario[]{
  return [...this._usuarios]
 }

  constructor() { }
}
