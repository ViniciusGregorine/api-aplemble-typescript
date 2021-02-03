import {IReading} from '../entities/IReading'

export interface IReadingRepository{
    getAllReading(): Promise<IReading[]>
    GetReadingByPlaceId(id: string): Promise<IReading[]>

    // getReadingByReadingType(type: string): Promise<IReading[]>
}