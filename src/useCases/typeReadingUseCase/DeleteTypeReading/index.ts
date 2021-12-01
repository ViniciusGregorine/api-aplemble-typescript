import { MysqlReadingRepository } from "@/infra/repositories/implementation/MysqlReadingRepository";
import { DeleteTypeReadingController } from "./deleteTypeReadingController";
import { DeleteTypeReadingUseCase } from "./deleteTypeReadingUseCase";

const msyqlRepo = new MysqlReadingRepository()
const typeReadingUseCase = new DeleteTypeReadingUseCase(msyqlRepo)
export const typeReadingController = new DeleteTypeReadingController(typeReadingUseCase)