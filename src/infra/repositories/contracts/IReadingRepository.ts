import {IReading, ITypeReading} from '@/domain/entities/IReading'
import { TypeReading } from '@/domain/entities/typeReading';

export interface IReadingRepository{
    getAllReading(): Promise<IReading[]>
    GetReadingByPlaceId(id: number): Promise<IReading[]>
    save(reading: any): Promise<void>

    GetTypeReading(): Promise<ITypeReading[]> 
    findTypeReadingByDescription(description: string): Promise<any>
    deleteTypeReading(description: string): Promise<void>
    saveTypeReading(typeReading: TypeReading): Promise<void>
}