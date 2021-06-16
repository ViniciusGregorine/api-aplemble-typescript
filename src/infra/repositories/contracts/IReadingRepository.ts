import {IReading} from '@/domain/entities/IReading'

export interface IReadingRepository{
    getAllReading(): Promise<IReading[]>
    GetReadingByPlaceId(id: string): Promise<IReading[]>

    // getReadingByReadingType(type: string): Promise<IReading[]>
}