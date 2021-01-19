import { Sensor } from "@/entities/Sensor";
import { ISensorsRepository } from "@/repositories/ISensorsRepository";

export class ListSensorUseCase {
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async execute(){
        const data = await this.sensorsRepository.get()

        return data;
    }

}
