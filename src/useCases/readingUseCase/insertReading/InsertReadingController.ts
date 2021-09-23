import { errorHandle, HttpRequest, HttpResponse, ok} from "@/routeAdapter/HttpHandle"
import { InsertReadingUseCase } from "./InsertReadingUseCase"

export class InsertReadingController {
    constructor(
        private insertReadingUseCase: InsertReadingUseCase 
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        if (!req.body) return errorHandle({message: 'content cannot be ampty', status: 400})
        
         const requiredParans = ['id_place', 'id_sensor']

        for(const param of requiredParans){
            if(!req.body[param]) return errorHandle({message: `missing param: '${param}' `, status: 400})
            }

        try {
            await this.insertReadingUseCase.execute(req.body)
            return ok('sucessifuly insert reading')

        } catch (error: any) {
            return errorHandle(error)
        }
    }
}