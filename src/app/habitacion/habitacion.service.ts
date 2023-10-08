import { Injectable } from '@angular/core';
import { Habitacion } from './interfaces/Habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private _habitacion: Habitacion[]=[
    {
      idhabitacion:1,
      numerohabitacion:"N°0001",
      precio:50,
      estado:"Mantenimiento",
      piso:"Primero",
      tipohabitacion:"Matrimonial"
    },
    {
      idhabitacion:2,
      numerohabitacion:"N°0002",
      precio:45,
      estado:"Optimo",
      piso:"Primero",
      tipohabitacion:"Doble"
    },
    {
      idhabitacion:3,
      numerohabitacion:"N°0003",
      precio:48,
      estado:"Mantenimiento",
      piso:"Primero",
      tipohabitacion:"Matrimonial"
    },
    {
      idhabitacion:4,
      numerohabitacion:"N°0004",
      precio:60,
      estado:"Optimo",
      piso:"Primero",
      tipohabitacion:"Individual"
    },
    {
      idhabitacion:5,
      numerohabitacion:"N°0005",
      precio:25,
      estado:"Sucia",
      piso:"Segundo",
      tipohabitacion:"Doble"
    }
  ]

  get habitaciones():Habitacion[] {
    return [...this._habitacion];
  }

  constructor() { }
}
