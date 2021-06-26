import { IInstitution } from "@/domain/entities/IInstitution";
import { ErrorREST, error} from "@/domain/errors/errorRest";
import { IInstitutionRepository } from "@/infra/repositories/contracts/IInstitutionRepository";
import { LoginDTO } from "./loginDTO";
import { CreateJwtToken } from "@/validation/CreateJwtToken";


export class LoginUseCase {
    constructor(
        private readonly institutionRepository: IInstitutionRepository,
        private readonly createJwtToken: CreateJwtToken
    ){}

    async login(data: LoginDTO){
       
        const allInstitution = await this.institutionRepository.getAllInstitution()

        const institution: IInstitution | undefined = allInstitution?.find(Element => Element.email === data.email)

        if(!institution) throw new ErrorREST(error.LoginbadRequest)

        if(data.password !== institution.password){
            throw new ErrorREST(error.LoginbadRequest)
        }

        const token = this.createJwtToken.signing(institution)

        return token
    }
}