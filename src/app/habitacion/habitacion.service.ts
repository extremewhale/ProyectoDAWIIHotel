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
  private _tipohabitaciones:TipoHabitacion[]=[]
  private _habitacion: Habitacion[]=[]

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

  obtenerTipoHabitacion(){
    this._http.get<TipoHabitacion[]>(urlBase+"/roomtypes").subscribe(res=>{
        this._tipohabitaciones=res;
    })
  }

  obtenerHabitacion(){
    this._http.get<Habitacion[]>(urlBase+"/room").subscribe(res=>{
      this._habitacion=res;
    })
  }

  constructor(private _http:HttpClient) {
    this.obtenerEstadoHabitacion()
    this.obtenerPiso();
    this.obtenerTipoHabitacion();
    this.obtenerHabitacion()
   }
}
