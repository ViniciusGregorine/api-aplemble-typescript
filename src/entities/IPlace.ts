import { RowDataPacket } from "mysql2";

export interface IPlace extends RowDataPacket{
    id?: number

    sensor_temp: boolean 
    sensor_humi: boolean
    description: string

    note?: string
    lim_demperature?: number

    id_dimension: number
    id_material: number
    id_institution: number

}