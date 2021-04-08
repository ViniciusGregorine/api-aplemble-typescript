import { IInstitution } from "@/entities/IInstitution";
import { ErrorREST, error} from "@/errors/errorRest";
import { IInstitutionRepository } from "@/repositories/contracts/IInstitutionRepository";
import { LoginDTO } from "./loginDTO";

export class LoginUseCase {
    constructor(
        private readonly institutionRepository: IInstitutionRepository
    ){}

    async login(data: LoginDTO){
       
        const allInstitution = await this.institutionRepository.getAllInstitution()

        const institution: IInstitution | undefined = allInstitution?.find(Element => Element.email === data.email)

        if(!institution) throw new ErrorREST(error.LoginbadRequest)

        if(data.password !== institution.password){
            throw new ErrorREST(error.LoginbadRequest)
        }

        return 'token aqui'
    }
}