export interface IController {
    handle(req: HttpRequest): Promise<HttpResponse>
}

export interface HttpRequest<T = any> {
    body?: T
}

export interface HttpResponse<T = any> {
    statusCode: number,
    data: T
}

export type ErrorType = {
    status: number,
    message: string,
    stack: string
}

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    data: data
  })

  export const errorHandle = (error: ErrorType): HttpResponse => ({
    statusCode: error.status,
    data: error.message
  })
