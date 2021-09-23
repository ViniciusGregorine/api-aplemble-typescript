import { errorHandle, HttpRequest, HttpResponse, IController, ok } from '@/routeAdapter/HttpHandle'
import { GetReadByPlaceUseCase } from '@/useCases/readingUseCase/GetReadByPlace/GetReadByPlaceUseCase'

export class GetReadByPlaceController implements IController{
    constructor(
        private getReadByPlaceUseCase: GetReadByPlaceUseCase
    ){ }

    async handle(req: HttpRequest): Promise<HttpResponse>{
        // gambiarra exclua isso depois pelo amor de deus 
        function formatDate(date: Date){
            const dateFormat: String = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear()
            return dateFormat
        }
        
        try {
            const id = req.params.place_id
            const data = await this.getReadByPlaceUseCase.GetReadByPlceId(id)

            const parseReading = data.map(
            entity => ({
                ...entity,
                date: formatDate(new Date(entity.date))

            })
            )

            return ok(parseReading)

        } catch(error: any) {
            return errorHandle(error)
       }
    }
}