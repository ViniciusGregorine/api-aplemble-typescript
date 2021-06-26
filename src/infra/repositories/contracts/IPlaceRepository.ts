import {IPlace} from '@/domain/entities/IPlace'

export interface IPlaceRepository {
    getAllPlace(): Promise<IPlace[]>
}