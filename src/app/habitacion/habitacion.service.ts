import { Injectable } from '@angular/core';
import { Habitacion } from './interfaces/Habitacion';
import { EstadoHabitacion } from './interfaces/EstadoHabitacion';
import { Piso } from './interfaces/Piso';
import { TipoHabitacion } from './interfaces/TipoHabitacion';
import { HttpClient } from '@angular/common/http';
import urlBase from '../contantes';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private _estadohabitaciones:EstadoHabitacion[]=[]
  private _pisos:Piso[]=[]
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

  obtenerEstadoHabitacion(){
    this._http.get<EstadoHabitacion[]>(urlBase+"/estateroom").subscribe(res=>{
        this._estadohabitaciones=res;
    })
  }

  
  obtenerPiso(){
    this._http.get<Piso[]>(urlBase+"/floor").subscribe(res=>{
        this._pisos=res;
    })
  }

  constructor(private _http:HttpClient) {
    this.obtenerEstadoHabitacion()
    this.obtenerPiso();
   }
}
