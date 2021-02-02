import { MysqlReadingRepository } from "../../repositories/implementation/MysqlReadingRepository";
import { ListReadingController } from "./ListReadingController";
import { ListReadingUseCase } from "./ListreadingUseCase";

const mysqlReadingRepository = new MysqlReadingRepository()

const listReadingUseCase = new ListReadingUseCase(mysqlReadingRepository)

const listReadingController = new ListReadingController(listReadingUseCase)

export  {listReadingController, listReadingUseCase}