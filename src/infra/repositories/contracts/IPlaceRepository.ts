import {IPlace} from '@/domain/entities/IPlace'
import { Place } from '@/domain/entities/Place';

export interface IPlaceRepository {
    getAllPlace(): Promise<IPlace[]>
    findByDescription(type: string): Promise<string>

    save(place: Place): Promise<void>
    delete(description: string): Promise<void>
}