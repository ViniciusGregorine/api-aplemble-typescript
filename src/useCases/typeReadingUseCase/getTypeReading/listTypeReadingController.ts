import { HttpResponse, IController, HttpRequest, ok, errorHandle } from '@/routes/routeAdapter/HttpHandle'
import { ListTypeReadingUseCase } from './listTypeReadingUseCase'

export class ListTypeReadingController implements IController{
    constructor (
        private listReadinguseCase: ListTypeReadingUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const response = await this.listReadinguseCase.ListAll()
            return ok(response)
        } catch (err: any) {
            return errorHandle(err)
        }
    }
}