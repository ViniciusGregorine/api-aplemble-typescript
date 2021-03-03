import { IReadingRepository } from '@/repositories/contracts/IReadingRepository'

export class ListReadingUseCase{
    constructor (
        private readingRepository: IReadingRepository
    ){}
    
     async ListAll() {
            const data = await this.readingRepository.getAllReading()
            return data
    }
}