import {IReading, ITypeReading} from '@/domain/entities/IReading'

export interface IReadingRepository{
    getAllReading(): Promise<IReading[]>
    GetReadingByPlaceId(id: number): Promise<IReading[]>
    save(reading: any): Promise<void>

    GetTypeReading(): Promise<ITypeReading[]> 
    // addTypeReading(typeReading: object): Promise<void>

    // getReadingByReadingType(type: string): Promise<IReading[]>
}