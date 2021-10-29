import { RowDataPacket } from "mysql2";

export interface IReading extends RowDataPacket{
    id: number

    date: string
    hour: number
    value: number
    id_type_reading: number
    id_place: number
    id_sensor: number  
}