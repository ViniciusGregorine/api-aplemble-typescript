import {Sensor} from '@/domain/entities/Sensor'

export interface ISensorsRepository{
    findByDescription(type: string): Promise<Sensor>
    save(sensor: Sensor): Promise<void>
    getAllSensor(): Promise<Sensor[]>  // change to getSensor
    deleteSensor(id: number): Promise<void>
}

/*
deleteSensor(): Promise<void>
ListSensorById(): Promise<sensor>
*/