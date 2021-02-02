import {IReading} from '../entities/IReading'

export interface IReadingRepository{
    GetAllReading(): Promise<IReading[]>
    GetReadingByPlaceId(id: number): Promise<IReading[]>
    
    // getReadingByReadingType(type: string): Promise<IReading[]>
}