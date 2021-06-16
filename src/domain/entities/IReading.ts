import { RowDataPacket } from "mysql2";

export interface IReading extends RowDataPacket{
    id: number,
    date: string,
    hour: number,
    value_humidity: number,
    value_temperature: number,
    id_place: number,
    id_sensor: number  
}