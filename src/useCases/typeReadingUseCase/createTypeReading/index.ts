import { MysqlReadingRepository } from "@/infra/repositories/implementation/MysqlReadingRepository";
import { CreateTypeReadingController } from "./createTypeReadingController";
import { CreateTypeReadingUseCase } from "./createTypeReadingUseCase";


const msyqlRepo = new MysqlReadingRepository()
const typeReadingUseCase = new CreateTypeReadingUseCase(msyqlRepo)
export const createTypeReadingController = new CreateTypeReadingController(typeReadingUseCase)