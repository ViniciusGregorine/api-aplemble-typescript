export interface IReadingDTO {
    id?: number

    date?: string
    hour?: string
    value: number | number[] | any
    id_place: number
    id_sensor: number
    id_type_reading: number
}