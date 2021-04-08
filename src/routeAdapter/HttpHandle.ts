export interface IController {
    handle(req: HttpRequest): Promise<HttpResponse>
}

export interface HttpRequest<T = any> {
    body?: T
    params?: T
    header?: T
}

export interface HttpResponse<T = any> {
    statusCode: number,
    data: T
}


export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    data: {message: data}
  })
  
export type ErrorType = {
    status: number,
    message: string,
    stack?: string
}

  export const errorHandle = (error: ErrorType): HttpResponse => ({
    statusCode: error.status || 500,
    data: {massege: error.message || 'unexpect error'}
  })
