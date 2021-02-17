import { ISensor } from '@/entities/ISensor'
import {Sensor} from '../entities/Sensor'

export interface ISensorsRepository{
    // findByType(type: string): Promise<Sensor>
    save(sensor: Sensor): Promise<void>
    get(): Promise<ISensor[]> | undefined
}

/*
deleteSensor(): Promise<void>
ListSensorById(): Promise<sensor>
*/