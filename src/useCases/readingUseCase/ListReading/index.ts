import { MysqlReadingRepository } from '@/repositories/implementation/MysqlReadingRepository'
import { ListReadingController } from '@/useCases/readingUseCase/ListReading/ListReadingController'
import { ListReadingUseCase } from '@/useCases/readingUseCase/ListReading/ListreadingUseCase'

const mysqlReadingRepository = new MysqlReadingRepository()

const listReadingUseCase = new ListReadingUseCase(mysqlReadingRepository)

const listReadingController = new ListReadingController(listReadingUseCase)

export  {listReadingController, listReadingUseCase}