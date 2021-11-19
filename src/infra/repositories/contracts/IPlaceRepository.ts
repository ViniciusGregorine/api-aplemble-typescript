import {IPlace} from '@/domain/entities/IPlace'
import { Place } from '@/domain/entities/Place';

export interface IPlaceRepository {
    getAllPlace(): Promise<IPlace[]>

    save(place: Place): Promise<void>
    findByDescription(type: string): Promise<string>

    // update(place: IPlace): Promise<void>
}