import {HttpResponse, IController, ok } from "@/routeAdapter/HttpHandle";
import { LoginUseCase } from "./loginUseCase";

export class LoginController implements IController{ 
    constructor(
        private readonly loginUseCase: LoginUseCase 
    ){}

    async handle(): Promise<HttpResponse>{
        
        return ok('mensagem enviada')
    }

}