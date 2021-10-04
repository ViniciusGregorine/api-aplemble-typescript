import {Sensor} from '@/domain/entities/Sensor'

export interface ISensorsRepository{
    findByDescription(type: string): Promise<Sensor>
    save(sensor: Sensor): Promise<void>
    getAllSensor(): Promise<Sensor[]>  // change to getSensor
    deleteSensor(sensor: number | string): Promise<void>
}

/*
ListSensorById(): Promise<sensor>
*/