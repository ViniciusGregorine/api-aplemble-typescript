import { LoginController } from "./loginController";
import { LoginUseCase } from "./loginUseCase";

const loginUseCase = new LoginUseCase()

export const loginController = new LoginController(loginUseCase)

