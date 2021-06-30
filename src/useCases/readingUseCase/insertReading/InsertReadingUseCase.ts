import { Reading } from "@/domain/entities/Reading"
import { MysqlReadingRepository } from "@/infra/repositories/implementation/MysqlReadingRepository"
import { IReadingDTO } from "./IReadingDTO"

export class InsertReadingUseCase{
    constructor(
        private readingRepository: MysqlReadingRepository
    ){}

    async execute(data: IReadingDTO){
        const reading = new Reading(data)

        await this.readingRepository.save(reading)
    }
}