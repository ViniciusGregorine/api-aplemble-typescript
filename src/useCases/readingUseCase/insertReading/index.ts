import { MysqlReadingRepository } from "@/infra/repositories/implementation/MysqlReadingRepository"
import { InsertReadingController } from "./InsertReadingController"
import { InsertReadingUseCase } from "./InsertReadingUseCase"

const mysqlReadingRepository= new  MysqlReadingRepository

const insertReadingUseCase = new InsertReadingUseCase(mysqlReadingRepository)

const insertReadingController = new InsertReadingController(insertReadingUseCase)

export { insertReadingController, insertReadingUseCase}