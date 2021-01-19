/*
metodo de salvar no banco 
buscar sensor por descrição/tipo

*/

import { ISensor } from '@/entities/ISensor'
import {IListSensorDTO} from '@/useCases/ListSensor/IListSensorDTO'

import {Sensor} from '../entities/Sensor'

export interface ISensorsRepository{
    // findByType(type: string): Promise<Sensor>
    save(sensor: Sensor): Promise<void>
    get(): Promise<ISensor[]> | undefined

}

/*
ListSensor(): Promise<Sensor>
deleteSensor(): Promise<void>
ListSensorById(): Promise<sensor>
*/