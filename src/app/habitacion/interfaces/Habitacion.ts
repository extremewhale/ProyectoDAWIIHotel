import { EstadoHabitacion } from "./EstadoHabitacion";
import { Piso } from "./Piso";
import { TipoHabitacion } from "./TipoHabitacion";

export interface Habitacion {
    roomId:        number;
    roomNumber:    string;
    roomPrice:     number;
    roomStatusId:  number;
    floorId:       number;
    roomTypeId:    number;
    roomActive:    string;
    objRoomStatus: EstadoHabitacion;
    objFloor:      Piso;
    objRoomType:   TipoHabitacion;
}


