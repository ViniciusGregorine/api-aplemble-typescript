export interface IReadingDTO {
    id?: number

    date?: string
    hour?: number
    value_humidity?: number
    value_temperature?: number
    id_place: number
    id_sensor: number
}