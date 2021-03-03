import { MysqlReadingRepository } from '@/repositories/implementation/MysqlReadingRepository'
import { GetReadByPlaceController } from '@/useCases/readingUseCase/GetReadByPlace/GetReadByPlaceController'
import { GetReadByPlaceUseCase } from '@/useCases/readingUseCase/GetReadByPlace/GetReadByPlaceUseCase'


const mysqlReadingRepository = new MysqlReadingRepository()

const getReadByPlaceUseCase = new GetReadByPlaceUseCase(mysqlReadingRepository)

const getReadByPlaceController = new GetReadByPlaceController(getReadByPlaceUseCase)

export {getReadByPlaceUseCase, getReadByPlaceController}