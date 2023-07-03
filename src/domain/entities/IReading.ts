import { RowDataPacket } from "mysql2";

export interface ReadingEntity {
    id: number

    date?: string
    hour?: string
    value: number | number[]
    id_type_reading: number
    id_place: number
    id_sensor: number  
}

export interface IReading extends ReadingEntity, RowDataPacket{}

export interface ITypeReading extends RowDataPacket{
    id?: number

    description: string
    min_value?: number
    max_value?: number 
    prefix: string 
}