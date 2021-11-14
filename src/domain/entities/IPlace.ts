import { RowDataPacket } from "mysql2";

export interface IPlace extends RowDataPacket{
    id?: number

    description: string
    note?: string

    sensor_temp: boolean 
    sensor_humi: boolean
    lim_demperature?: number

    material: string
    height: number
    width: number
    length: number

    id_dimension?: number
    id_material?: number
    id_user?: number
}