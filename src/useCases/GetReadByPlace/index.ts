import { MysqlReadingRepository } from "../../repositories/implementation/MysqlReadingRepository";
import { GetReadByPlaceController } from "./GetReadByPlaceController";
import { GetReadByPlaceUseCase } from "./GetReadByPlaceuseCase";


const mysqlReadingRepository = new MysqlReadingRepository()

const getReadByPlaceUseCase = new GetReadByPlaceUseCase(mysqlReadingRepository)

const getReadByPlaceController = new GetReadByPlaceController(getReadByPlaceUseCase)

export {getReadByPlaceUseCase, getReadByPlaceController}