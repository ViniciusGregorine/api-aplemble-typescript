import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { HttpRequest } from '@/utils/routeAdapter/HttpHandle'

export function requiredParams(reqParans: string[], request: HttpRequest) {
    const totalRequest = {
        ...request.query,
        ...request.body,
        ...request.header,
        ...request
    }
    
    for(const param of reqParans) {
        if(!totalRequest[param]) {
            return  new ErrorREST(errorHelper.missingParam(param))           
        }
    }
}