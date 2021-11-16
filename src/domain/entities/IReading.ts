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

export interface ITypeReading extends RowDataPacket{
    id: number

    description: string
    min_value: number
    max_value: number 
    prefix: string 
}