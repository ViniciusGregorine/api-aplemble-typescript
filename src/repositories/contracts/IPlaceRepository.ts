import {IPlace} from '@/entities/IPlace'

export interface IPlaceRepository {
    getAllPlace(): Promise<IPlace[]>
}