import { IInstitution } from "@/entities/IInstitution";
import jwt from 'jsonwebtoken'

export class CreateJwtToken{

    signing(data: IInstitution){
        return jwt.sign(
            {
                name: data.name,
                _id: data.id
            },
            process.env.JWT_KEY!,
            {
                expiresIn: "1h"
            }
        )
    }
}