import { IReadingRepository } from "@/repositories/IReadingRepository";

export class GetReadByPlaceUseCase{
    constructor (
        private readingRepository : IReadingRepository
    ){}

    async GetReadByPlceId(id: string){
        const readings = await this.readingRepository.GetReadingByPlaceId(id)

        return readings
    }
}