export interface IReadingDTO {
    id?: number

    date?: string
    hour?: number
    value: number
    id_place: number
    id_sensor: number
    id_type_reading: number
}