import { MysqlInstitutionRepository } from "@/repositories/implementation/MysqIInstitutionRepository";
import { LoginController } from "./loginController";
import { LoginUseCase } from "./loginUseCase";

const institutionRepo = new MysqlInstitutionRepository()

const loginUseCase = new LoginUseCase(institutionRepo)

export const loginController = new LoginController(loginUseCase)

