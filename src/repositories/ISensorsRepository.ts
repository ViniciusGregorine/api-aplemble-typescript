/*
metodo de salvar no banco 
buscar sensor por descrição/tipo

*/

import {Sensor} from '../entities/Sensor'

export interface ISensorsRepository{
    findByType(type: string): Promise<Sensor>
    save(sensor: Sensor): Promise<void>
}