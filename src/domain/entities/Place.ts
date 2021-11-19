export class Place {
   public id?: number

    public description!: string
    public note?: string

    public sensor_temp?: boolean 
    public sensor_humi?: boolean
    public lim_temperature?: number

    public height!: number
    public width!: number
    public length!: number
    public material!: number
    public user!: number

    constructor(props: Place){
        Object.assign(this, props)
    }
}