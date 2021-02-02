import { ISensor } from '@/entities/ISensor'
import {Sensor} from '../entities/Sensor'

export interface ISensorsRepository{
    // findByType(type: string): Promise<Sensor>
    save(sensor: Sensor): Promise<void>
    getAllSensor(): Promise<ISensor[]> | undefined // change to getSensor
}

/*
deleteSensor(): Promise<void>
ListSensorById(): Promise<sensor>
*/