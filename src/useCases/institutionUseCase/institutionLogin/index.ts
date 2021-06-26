import { MysqlInstitutionRepository } from "@/infra/repositories/implementation/MysqIInstitutionRepository";
import { CreateJwtToken } from "@/validation/CreateJwtToken";
import { LoginController } from "./loginController";
import { LoginUseCase } from "./loginUseCase";

const institutionRepo = new MysqlInstitutionRepository()

const createJwtToken = new CreateJwtToken()

const loginUseCase = new LoginUseCase(institutionRepo, createJwtToken)

export const loginController = new LoginController(loginUseCase)

