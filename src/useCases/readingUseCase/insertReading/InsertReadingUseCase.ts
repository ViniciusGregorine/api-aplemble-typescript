import { Reading } from "@/domain/entities/Reading"
import { MysqlReadingRepository } from "@/infra/repositories/implementation/MysqlReadingRepository"

export class InsertReadingUseCase{
    constructor(
        private readingRepository: MysqlReadingRepository
    ){}

    async execute(data: any){
    //    const sensorAlreadyExist = await this.readingRepository.findByDescription(data.description)

        // if(sensorAlreadyExist)  throw new Error
        console.log("data: ", data)
       const reading = new Reading(data)
       console.log("reading: ", reading)
       
        await this.readingRepository.save(reading)
    }
}