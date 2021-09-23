import { HttpResponse, IController, HttpRequest, ok, errorHandle } from '@/routeAdapter/HttpHandle'
import { ListReadingUseCase } from './ListreadingUseCase'

export class ListReadingController implements IController{
    constructor (
        private listReadinguseCase: ListReadingUseCase
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