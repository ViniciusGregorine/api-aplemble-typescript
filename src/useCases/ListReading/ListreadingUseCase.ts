import { IReadingRepository } from "@/repositories/IReadingRepository";

export class ListReadingUseCase{
    constructor (
        private readingRepository: IReadingRepository
    ){}

     async ListAll() {
        try{
            const data = await this.readingRepository.getAllReading()
            return data
        } catch(err){
            console.error('erro '+ err)
            throw new Error
            
        }
    }
}