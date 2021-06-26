import {IInstitution} from '@/domain/entities/IInstitution'

export interface IInstitutionRepository{
    findByEmail(type: string): Promise<IInstitution>
    save(Institution: IInstitution): Promise<void>
    getAllInstitution(): Promise<IInstitution[]> | undefined 
}