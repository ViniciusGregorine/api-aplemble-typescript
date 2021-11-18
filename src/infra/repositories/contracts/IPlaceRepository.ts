import {IPlace} from '@/domain/entities/IPlace'

export interface IPlaceRepository {
    getAllPlace(): Promise<IPlace[]>

    save(place: IPlace): Promise<void>
    // update(place: IPlace): Promise<void>

}