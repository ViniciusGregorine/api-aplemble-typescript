import {errorHandle, HttpRequest, HttpResponse, IController, ok } from "@/routes/routeAdapter/HttpHandle";
import { LoginUseCase } from "./loginUseCase";

export class LoginController implements IController{ 
    constructor(
        private readonly loginUseCase: LoginUseCase 
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const email = req.header('email')
        const password = req.header('password')

        if(!email || !password) return errorHandle({message: "lack of headers", status: 400})

        try {
            const jwt = await this.loginUseCase.login({email: email, password: password})
            return ok(jwt)
        } catch (err: any) {
           return errorHandle(err.response)
        } 
    }
}