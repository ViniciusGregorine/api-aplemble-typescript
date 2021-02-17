import { MysqlReadingRepository } from "../../repositories/implementation/MysqlReadingRepository";
import { GetReadByPlaceController } from "./GetReadByPlaceController";
import { GetReadByPlaceUseCase } from "./GetReadByPlaceUseCase";


const mysqlReadingRepository = new MysqlReadingRepository()

const getReadByPlaceUseCase = new GetReadByPlaceUseCase(mysqlReadingRepository)

const getReadByPlaceController = new GetReadByPlaceController(getReadByPlaceUseCase)

export {getReadByPlaceUseCase, getReadByPlaceController}