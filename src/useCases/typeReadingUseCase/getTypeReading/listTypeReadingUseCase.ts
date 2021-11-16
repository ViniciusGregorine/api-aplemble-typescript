import { IReadingRepository } from '@/infra/repositories/contracts/IReadingRepository'

export class ListTypeReadingUseCase{
    constructor (
        private readingRepository: IReadingRepository
    ){}
    
     async ListAll() {
            const data = await this.readingRepository.GetTypeReading()
            return data
    }
}