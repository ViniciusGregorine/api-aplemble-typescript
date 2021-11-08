import { RowDataPacket } from "mysql2";

export interface IReading extends RowDataPacket{
    id: number

    date: string
    hour: number
    value: number
    type_reading: string
    // id_place: number
    id_sensor: number  
}