import { ISensorsRepository } from "@/repositories/ISensorsRepository";

export class ListSensorUseCase {
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async list(){
        const data = await this.sensorsRepository.getAllSensor()

        return data;
    }
}
