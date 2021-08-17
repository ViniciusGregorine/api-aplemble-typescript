import { errorHandle, HttpRequest, HttpResponse, ok} from "@/routeAdapter/HttpHandle"
import { InsertReadingUseCase } from "./InsertReadingUseCase"
import { IReadingDTO } from "./IReadingDTO"

export class InsertReadingController {
    constructor(
        private insertReadingUseCase: InsertReadingUseCase 
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        if (!req.body) return errorHandle({message: 'content cannot be ampty', status: 400})

         const requiredParans = ['humi', 'temp', 'place', 'sensor']
        for(const param of requiredParans){
            if(!req.query[param]) return errorHandle({message: `missing param: '${param}' `, status: 400})
            }

        const readingQuery: IReadingDTO = {
            value_temperature: req.query.temp,
            value_humidity: req.query.humi,
            id_place: req.query.place,
            id_sensor: req.query.sensor
        }

        try {
            await this.insertReadingUseCase.execute(readingQuery)
            return ok('sucessifuly insert reading')

        } catch (error) {
            return errorHandle(error)
        }
    }
}