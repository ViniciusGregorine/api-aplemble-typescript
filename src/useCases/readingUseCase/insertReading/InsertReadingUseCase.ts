import { Reading } from "@/domain/entities/Reading"
import { MysqlReadingRepository } from "@/infra/repositories/implementation/MysqlReadingRepository"
import { IReadingDTO } from "./IReadingDTO"

export class InsertReadingUseCase{
    constructor(
        private readingRepository: MysqlReadingRepository
    ){}

    async execute(data: IReadingDTO){

        if(data.value instanceof Array){
            console.log('batch reading')

            data.value.forEach(async reading => {
                console.log(reading[0], reading[1])

                const readingObj = new Reading(
                   {
                    value: reading[0],
                    hour: reading[1],
                    id_place:  data.id_place,
                    id_sensor:  data.id_sensor,
                    id_type_reading:  data.id_type_reading
                   }
                )

                await this.readingRepository.save(readingObj)
            })
        }else{

            const reading = new Reading(data)

            await this.readingRepository.save(reading)
        }
    }
}