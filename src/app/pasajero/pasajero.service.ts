import { Injectable } from '@angular/core';
import { Pasajero } from './interfaces/Pasajero';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
  private _pasajeros:Pasajero[]=[
    {
      idpasajero:1,
      tipodocumento:"DNI",
      numerodocumento:"05458525",
      nombrecompleto:"Elifio Roldan Huayllasco",
      telefono:"995566400",
      correo:"elifioroldan@hotmail.com"
    },
    {
      idpasajero:2,
      tipodocumento:"DNI",
      numerodocumento:"69854785",
      nombrecompleto:"Hugo Pastor Vasquez",
      telefono:"995566400",
      correo:"hugopastor@hotmail.com"
    },
    {
      idpasajero:3,
      tipodocumento:"DNI",
      numerodocumento:"14523698",
      nombrecompleto:"Felix Torres Terreros",
      telefono:"995566400",
      correo:"felixtorres@hotmail.com"
    },
    {
      idpasajero:4,
      tipodocumento:"DNI",
      numerodocumento:"36985214",
      nombrecompleto:"Luis Calderon Tocto",
      telefono:"995566400",
      correo:"luiscanderon@hotmail.com"
    },
    {
      idpasajero:5,
      tipodocumento:"DNI",
      numerodocumento:"74125896",
      nombrecompleto:"Cristhofer Arismendiz Umbo",
      telefono:"995566400",
      correo:"cristhoferarismendiz@gmail.com"
    }
  ]

  get pasajeros():Pasajero[]{
    return [...this._pasajeros]
  }

  constructor() { 

  }
}
