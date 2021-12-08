import { errorHandle, HttpRequest, HttpResponse, ok} from "@/utils/routeAdapter/HttpHandle"
import { requiredParams } from "@/utils/requireParams"
import { InsertReadingUseCase } from "./InsertReadingUseCase"
import { IReadingDTO } from "./IReadingDTO"

export class InsertReadingController {
    constructor(
        private insertReadingUseCase: InsertReadingUseCase 
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        if (!req.body) return errorHandle({message: 'content cannot be ampty', status: 400})

        const error = requiredParams(['value', 'id_place', 'id_sensor', 'id_type_reading'], req) 
        if(error) return errorHandle(error.response)

        const readingQuery: IReadingDTO = {
            value: req.body.value,
            id_place:  req.body.id_place,
            id_sensor:  req.body.id_sensor,
            id_type_reading:  req.body.id_type_reading
        }

        try {
            await this.insertReadingUseCase.execute(readingQuery)
            return ok('successfully insert reading')

        } catch (error: any) {
            return errorHandle(error)
        }
    }
}