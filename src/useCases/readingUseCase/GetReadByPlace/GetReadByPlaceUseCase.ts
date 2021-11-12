import { IReadingRepository } from '@/infra/repositories/contracts/IReadingRepository'

interface FillReadings { 
    type_reading: string
    prefix: string
    values: any[]           
}
export class GetReadByPlaceUseCase{
    constructor (
        private readingRepository : IReadingRepository
    ){}

    async GetReadByPlceId(id: number){
        const readings = await this.readingRepository.GetReadingByPlaceId(id)

        let currentDescription = ""
        let allTypeReadings: string[] = []

        readings.forEach((entity, index) => {
            if(index === 0) {
                currentDescription = entity.type_reading
                allTypeReadings.push(currentDescription)
            }
            else {
                if(currentDescription !== entity.type_reading){
                    currentDescription = entity.type_reading
                    allTypeReadings.push(currentDescription)
                }
            }
        })
        
        let filteredReadings: FillReadings[] = []
        
        allTypeReadings.forEach((entity, index )=>{
            const typeReading = readings.filter(reading => reading.type_reading === entity)
            const matchReading = typeReading.filter(entity => entity.type_reading === typeReading[index].type_reading)

            filteredReadings.push(
                {
                    type_reading: typeReading[index].type_reading, 
                    prefix: typeReading[index].prefix ,
                    values: matchReading.map(entity => ({
                        id: entity.id,
                        value: entity.value,
                        date: entity.date,
                        hour: entity.hour,
                        id_sensor: entity.id_sensor
                    })) 
                }
            )
        })
        return filteredReadings
    }
}
