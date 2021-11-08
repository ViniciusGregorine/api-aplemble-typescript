import {IReading} from '@/domain/entities/IReading'

export interface IReadingRepository{
    getAllReading(): Promise<IReading[]>
    GetReadingByPlaceId(id: number): Promise<IReading[]>

    // getReadingByReadingType(type: string): Promise<IReading[]>
}