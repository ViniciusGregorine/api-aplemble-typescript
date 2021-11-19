 export class Sensor {
    public id?: string

    public description!: string
    public device!: number
    public situation!: number
    public gap!: number

    constructor(props: Sensor){
        Object.assign(this, props)
    }
}


