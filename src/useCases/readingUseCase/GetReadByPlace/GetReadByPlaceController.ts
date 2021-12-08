import { errorHandle, HttpRequest, HttpResponse, IController, ok } from '@/utils/routeAdapter/HttpHandle'
import { GetReadByPlaceUseCase } from '@/useCases/readingUseCase/GetReadByPlace/GetReadByPlaceUseCase'

export class GetReadByPlaceController implements IController{
    constructor(
        private getReadByPlaceUseCase: GetReadByPlaceUseCase
    ){ }

    async handle(req: HttpRequest): Promise<HttpResponse>{      
        try {
            const id = req.params.place_id
            const data = await this.getReadByPlaceUseCase.GetReadByPlceId(id)
            
            return ok(data)
        } catch(error: any) {
            return errorHandle(error)
       }
    }
}