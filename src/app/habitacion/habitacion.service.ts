import { Injectable } from '@angular/core';
import { Habitacion } from './interfaces/Habitacion';
import { EstadoHabitacion } from './interfaces/EstadoHabitacion';
import { Piso } from './interfaces/Piso';
import { TipoHabitacion } from './interfaces/TipoHabitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private _estadohabitaciones:EstadoHabitacion[]=[
    {
      idestadohabitacion:1,
      nombreestadohabitacion:"Optimo Estado"
    },
    {
      idestadohabitacion:2,
      nombreestadohabitacion:"Mantenimiento"
    },
    {
      idestadohabitacion:3,
      nombreestadohabitacion:"Inoperativo"
    }
  ]
  private _pisos:Piso[]=[
    {
      idpiso:1,
      descpiso:"1° Piso"
    },
    {
      idpiso:2,
      descpiso:"2° Piso"
    },
    {
      idpiso:3,
      descpiso:"3° Piso"
    }
  ]
  private _tipohabitaciones:TipoHabitacion[]=[
      {
        idtipohabitacion:1,
        nombretipohabitacion:"Simple"
      },
      {
        idtipohabitacion:2,
        nombretipohabitacion:"Doble"
      },
      {
        idtipohabitacion:3,
        nombretipohabitacion:"Matrimonial"
      }
  ]
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

  get pisos():Piso[] {
    return [...this._pisos];
  }

  get estadohabitaciones():EstadoHabitacion[] {
    return [...this._estadohabitaciones];
  }

  get tipohabitaciones():TipoHabitacion[] {
    return [...this._tipohabitaciones];
  }

  constructor() { }
}
